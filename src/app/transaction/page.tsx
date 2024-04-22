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


interface Transaction {
  id: string;
  category: string;
  type: string;
  date: string;
}

interface Transfer {
  id: string;
  reference: string;
  transferReason: string;
  amount: number;
  label: string;
  effectiveDate: string;
  registrationDate: string;
  accountSender: string;
  accountReceiver: string;
}


const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "id",
    header: "Order",
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


export default function Transaction({}: Props) {
  const [transactions, setTransactions] = React.useState<Transaction[]>([]);
  const [transfers, setTransfers] = React.useState<Transfer[]>([]);

  React.useEffect(() => {
    // Fetch transaction data
    fetch('http://localhost:8080/transaction')
      .then((response) => response.json())
      .then((data) => {
        const updatedTransactions = data.map((item: any) => ({
          id: item.id,
          category: item.category,
          type: item.type,
          date: item.date,
        }));
        setTransactions(updatedTransactions);
      })
      .catch((error) => console.error('Error fetching transactions:', error));

    // Fetch transfer data
    fetch('http://localhost:8080/transfer')
      .then((response) => response.json())
      .then((data) => {
        const updatedTransfers = data.map((item: any) => ({
          id: item.id,
          reference: item.reference,
          transferReason: item.transferReason,
          amount: item.amount,
          label: item.label,
          effectiveDate: item.effectiveDate,
          registrationDate: item.registrationDate,
          accountSender: item.accountSender,
          accountReceiver: item.accountReceiver,
        }));
        setTransfers(updatedTransfers);
      })
      .catch((error) => console.error('Error fetching transfers:', error));
  }, []);

  const transformData = (transfers: Transfer[]): Transaction[] => {
    return transfers.map((transfer) => {
      const currentDate = new Date().toISOString().split('T')[0];
      const lastOrder =
        currentDate >= transfer.registrationDate ? transfer.registrationDate : transfer.effectiveDate;
      const status = currentDate >= transfer.registrationDate ? 'Completed' : 'Processing';

      return {
        id: transfer.id,
        category: transfer.label,
        type: 'CREDIT',
        date: lastOrder,
        status: status,
      };
    });
  };


  const mergedData = [...transactions, ...transformData(transfers)];
  
  return (
    <div>
      <div className="flex flex-row justify-between pb-5 gap-5 w-full items-center">
      <PageTitle title="Transactions" />
      
      </div>
      <div>
      <DataTable columns={columns} data={mergedData} />
      </div>
      </div>
  );
}