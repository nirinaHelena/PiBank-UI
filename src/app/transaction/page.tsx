/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/**
 * eslint-disable @next/next/no-img-element
 *
 * @format
 */

/** @format */
"use client";

import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import TrnasactionForm from "@/components/TransactionForm"
import TransactionForm from "@/components/TransactionForm";


type Props = {};

type Transfer = {
  ref : string,
  registrationDate : string;
  effectiveDate : string;
  label : string;
  isCanceled : boolean;
};

type Payment = {
  order: string;
  status: string;
  lastOrder: string;
  label: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "order",
    header: "Order"
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div
          className={cn("font-medium w-fit px-4 py-2 rounded-lg", {
            "bg-red-200": row.getValue("status") === "Pending",
            "bg-orange-200": row.getValue("status") === "Processing",
            "bg-green-200": row.getValue("status") === "Completed"
          })}
        >
          {row.getValue("status")}
        </div>
      );
    }
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "label",
    header: "label"
  }
];

const fetchData =async () : Promise<Payment[]> => {
  const tranfersResponse = await fetch("http://localhost:8080/transfer");
  const transfers : Transfer[] = await tranfersResponse.json();

  const paymentData : Payment[] = transfers.map((transfer) => {
    const status = 
      new Date(transfer.effectiveDate) <= new Date() && !transfer.isCanceled
        ? "Completed"
        : transfer.isCanceled
        ?"Pending"
        : "Processing";
    const lastOrder = status === "Pending" ? transfer.registrationDate : transfer.effectiveDate;
    return{
      order : transfer.ref,
      status,
      lastOrder,
      label : transfer.label,
    };
  });
  return paymentData;
};

export default function Transaction({}: Props) {
  const [data, setData] = useState<Payment[]>([]);

  useEffect(() =>{
    const fetchPayments =async () => {
      const paymentData = await fetchData();
      setData(paymentData);
    };
    fetchPayments();
  }, []);
  return (
    <div>
      <div className="flex flex-row justify-between pb-5 gap-5 w-full items-center">
      <PageTitle title="Transactions" />
      <Dialog>
        <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold  rounded-sm">Make a Transaction</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle> Make a Transaction</DialogTitle>
            <DialogDescription>
              Make a Transaction. Follow it on the table
            </DialogDescription>
          </DialogHeader>

          <TransactionForm/>

        </DialogContent>
      </Dialog>
      </div>
      <div>
      <DataTable columns={columns} data={data} />
      </div>
      </div>
  );
}