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
       <Button className="rounded-md font-semibold ">Create account</Button>
      </div>
      <div>
      <DataTable columns={columns} data={data} />
      </div>
    </div>
   
  );
}