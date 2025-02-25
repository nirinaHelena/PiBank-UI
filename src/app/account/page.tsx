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
  salary: number;
  birthday: string;
  accountNumber: string;
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
    accessorKey: "accountNumber",
    header: "Acount Number"
  },
  {
    accessorKey: "birthday",
    header: "Birthday"
  },
  {
    accessorKey: "salary",
    header: "Salary Monthly"
  }
];

const data: UserDetails[] = [
  {
    name: "Dera Miaro",
    salary: 4_000_000,
    birthday: "1984-10-01",
    accountNumber: "**** **** **** 4521"
  },
  {
    name: "Nathanel Fanomezana",
    salary: 1_200_000,
    birthday: "1995-02-25",
    accountNumber: "**** **** **** 1278"
  },
  {
    name: "Nirina Helena",
    salary: 400_000,
    birthday: "2003-03-20",
    accountNumber: "**** **** **** 5687"
  },
]

export default function AccountsPage({}: Props) {
  return (
    <div>
       <div className="flex flex-row justify-between pb-5 gap-5 w-full items-center">
       <PageTitle title="Accounts"/>
       <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="font-semibold  rounded-sm">Create account</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px]">
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