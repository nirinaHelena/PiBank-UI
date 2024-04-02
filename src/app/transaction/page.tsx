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
"use client"

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
import TransactionForm from "@/components/TransactionForm";


type Props = {};
type Transaction = {
  order: string;
  status: string;
  lastOrder: string;
  label: string;
};

const columns: ColumnDef<Transaction>[] = [
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
    accessorKey: "method",
    header: "Method"
  }
];

const data: Transaction[] = [
  {
    order: "ORD001",
    status: "Pending",
    lastOrder: "2023-01-15",
    label: "Credit Card"
  },
  {
    order: "ORD002",
    status: "Processing",
    lastOrder: "2023-02-20",
    label: "PayPal"
  },
  {
    order: "ORD003",
    status: "Completed",
    lastOrder: "2023-03-10",
    label: "Stripe"
  },
  {
    order: "ORD004",
    status: "Pending",
    lastOrder: "2023-04-05",
    label: "Venmo"
  },
  {
    order: "ORD005",
    status: "Completed",
    lastOrder: "2023-05-12",
    label: "Bank Transfer"
  },
  {
    order: "ORD006",
    status: "Processing",
    lastOrder: "2023-06-18",
    label: "Apple Pay"
  },
  {
    order: "ORD007",
    status: "Completed",
    lastOrder: "2023-07-22",
    label: "Google Pay"
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
    label: "Alipay"
  },
  {
    order: "ORD010",
    status: "Completed",
    lastOrder: "2023-10-18",
    label: "WeChat Pay"
  },
  {
    order: "ORD011",
    status: "Pending",
    lastOrder: "2023-11-25",
    label: "Square Cash"
  },
  {
    order: "ORD012",
    status: "Completed",
    lastOrder: "2023-12-08",
    label: "Zelle"
  },
  {
    order: "ORD013",
    status: "Processing",
    lastOrder: "2024-01-15",
    label: "Stripe"
  },
  {
    order: "ORD014",
    status: "Completed",
    lastOrder: "2024-02-20",
    label: "PayPal"
  },
  {
    order: "ORD015",
    status: "Pending",
    lastOrder: "2024-03-30",
    label: "Credit Card"
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
      </div>
  );
}