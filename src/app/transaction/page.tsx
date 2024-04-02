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
import React from "react";
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

const data: Payment[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-31",
    label: "Salary"
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-09-29",
    label: "Gifts"
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-01",
    label: "Party"
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-04-05",
    label: "Gasoil"
  },
  {
    order: "ORD005",
    status: "Completed",
    lastOrder: "2023-05-12",
    label: "Bank Transfer"
  },
  {
    order: "ORD006",
    status: "Completed",
    lastOrder: "2023-06-29",
    label: "Salary"
  },
  {
    order: "ORD007",
    status: "Completed",
    lastOrder: "2023-07-22",
    label: "Video Games"
  },
  {
    order: "ORD008",
    status: "Pending",
    lastOrder: "2023-08-30",
    label: "Cryptocurrency"
  },
  {
    order: "ORD009",
    status: "Processing",
    lastOrder: "2023-09-05",
    label: "Gasoil"
  },
  {
    order: "ORD010",
    status: "Completed",
    lastOrder: "2023-10-18",
    label: "Travel"
  },
  {
    order: "ORD011",
    status: "Pending",
    lastOrder: "2023-11-25",
    label: "Internet"
  },
  {
    order: "ORD012",
    status: "Completed",
    lastOrder: "2023-12-08",
    label: "Restaurant"
  },
  {
    order: "ORD013",
    status: "Processing",
    lastOrder: "2024-01-15",
    label: "Facture"
  },
  {
    order: "ORD014",
    status: "Completed",
    lastOrder: "2024-02-20",
    label: "Pension"
  },
  {
    order: "ORD015",
    status: "Pending",
    lastOrder: "2024-03-30",
    label: "Salary"
  }
];

export default function Transaction({}: Props) {
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