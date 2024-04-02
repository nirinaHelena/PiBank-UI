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

import React from 'react'
import SalesCard, { SalesProps } from "@/components/SalesCard";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import PageTitle from "@/components/PageTitle";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import TransferForm from "@/components/TransferForm";

type Props= {};

type TransferDetails = {
  name: string;
  account: string;
  saleAmount: string;
  date: string;
};

const columns: ColumnDef<TransferDetails>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 items-center">
          <img
            className="h-10 w-10"
            src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue(
              "name"
            )}`}
            alt="user-image"
          />
          <p>{row.getValue("name")} </p>
        </div>
      );
    }
  },
  {
    accessorKey: "account",
    header: "Account", 
  },
  {
    accessorKey: "saleAmount",
    header: "Sale Amount"
  },
  {
    accessorKey: "date",
    header: "Date"
  }
];
const data: TransferDetails[] = [
    {
      name: "Olivia Martin",
      account: "**** **** **** 1258",
      saleAmount: "+2500000",
      date: "2024-03-25"
    },
    {
      name: "Jackson Lee",
      account: "**** **** **** 5478",
      saleAmount: "+600000",
      date: "2024-03-24"
    },
    {
      name: "Isabella Nguyen",
      account: "**** **** **** 6512",
      saleAmount: "-800000",
      date: "2024-03-23"
    },
    {
      name: "Isabella Nguyen",
      account: "**** **** **** 9513",
      saleAmount: "-150000",
      date: "2024-03-22"
    },
    {
      name: "Isabella Nguyen",
      account: "**** **** **** 7514",
      saleAmount: "+200000",
      date: "2024-03-21"
    },
  ];

  const sortTransactionsByDate = (transactions: SalesProps[]) => {
    return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  };
  
function Transfer() {
    const recentTransactions = sortTransactionsByDate(userSalesData).slice(0, 5);

  return (
    <div>
    <div className="flex flex-row justify-between pb-5 gap-5 w-full items-center">
      <PageTitle title="Transfers" />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="font-semibold  rounded-sm">Make a Transaction</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle> Make a Transfer</DialogTitle>
            <DialogDescription>
        Make a Transfer. Follow it on the table
            </DialogDescription>
            </DialogHeader>

              <TransferForm/>

          </DialogContent>
      </Dialog>
    
<div>
      <DataTable columns={columns} data={data} />
      </div>
      </div>
      </div>
  );
}


export default Transfer;