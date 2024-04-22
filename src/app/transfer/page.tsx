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

import React, { useEffect, useState } from 'react'
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
import { cn } from "@/lib/utils";


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

function Transfer() {
  const [transfers, setTransfers] = useState<TransferDetails[]>([]); 

  useEffect(() => {
    const fetchTransfers = async () => {
      const userResponse = await fetch("http://localhost:8080/user");
      const accountResponse = await fetch("http://localhost:8080/account");
      const transferResponse = await fetch("http://localhost:8080/transfer");

      const userData = await userResponse.json();
      const accountData = await accountResponse.json();
      const transferData = await transferResponse.json();

      // Map user ID to user data for easy lookup
      const userMap = new Map(userData.map(user => [user.id, `${user.firstName} ${user.lastName}`]));

      // Map account ID to account number for easy lookup
      const accountMap = new Map(accountData.map(account => [account.id, `**** **** **** ${account.accountNumber.slice(-4)}`]));

      // Combine transfer, user, and account data
      const combinedData = transferData.map(transfer => ({
        name: userMap.get(transfer.accountSender) || "Unknown User",
        account: accountMap.get(transfer.accountSender) || "Unknown Account",
        saleAmount: transfer.amount,
        date: new Date(transfer.effectiveDate).toISOString().split('T')[0]
      }));

      setTransfers(combinedData);
    };

    fetchTransfers();
  }, []);

  const columns: ColumnDef<TransferDetails>[] = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "account", header: "Account" },
    { accessorKey: "saleAmount", header: "Sale Amount" },
    { accessorKey: "date", header: "Date" }
  ];

  return (
    <div>
     <div className="flex flex-row justify-between pb-5 gap-5 w-full items-center">
      <PageTitle title="Transfers" />
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="font-semibold  rounded-sm">Make a Transfer</Button>
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
    </div>
  <div>
      <DataTable columns={columns} data={transfers} />
        </div>
      </div>
  );
}


export default Transfer;