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
import  PageTitle  from "@/components/PageTitle";
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
import FormAccount from "@/components/Form"

type Props = {};
type UserDetails = {
  name: string;
  amount: number;
  lastOrder: string;
  reason: string;
};

const columns: ColumnDef<UserDetails>[] = [
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
    accessorKey: "amount",
    header: "Amount"
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order"
  },
  {
    accessorKey: "reason",
    header: "Reason"
  }
];

const data: UserDetails[] = [
  {
    name: "Dera Miaro",
    amount: 5_000_000,
    lastOrder: "2024-01-01",
    reason: "AWS"
  },
  {
    name: "Nathanel Fanomezana",
    amount: 1_200_000,
    lastOrder: "2024-02-25",
    reason: "Salary"
  },
  {
    name: "Nirina Helena",
    amount: -400_000,
    lastOrder: "2024-03-20",
    reason: "Birthday of Mum"
  },
]

export default function AccountsPage({}: Props) {
  return (
    <div>
       <div className="flex flex-row justify-between pb-5 gap-5 w-full items-center">
       <PageTitle title="Users"/>
       <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold  rounded-sm">Create account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create an Account</DialogTitle>
          <DialogDescription>
            Create a profile here. Click create when you're done.
          </DialogDescription>
        </DialogHeader>
        
          <FormAccount/>

      </DialogContent>
    </Dialog>
      </div>
      <div>
      <DataTable columns={columns} data={data} />
      </div>
    </div>
   
  );
}