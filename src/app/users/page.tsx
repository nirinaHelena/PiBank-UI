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

type Props = {};
type Payment = {
  name: string;
  number: number;
  lastOrder: string;
  reason: string;
};

const columns: ColumnDef<Payment>[] = [
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
    accessorKey: "number",
    header: "Card Number"
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

const data: Payment[] = [
  {
    name: "John Doe",
    number: 567891237825878,
    lastOrder: "2024-01-01",
    reason: "AWS"
  },
  {
    name: "Alice Smith",
    number: 4572325465894575,
    lastOrder: "2024-02-25",
    reason: "Salary"
  },
  {
    name: "Bob Johnson",
    number: 4578693256987454,
    lastOrder: "2024-03-20",
    reason: "Birthday of Mum"
  },
]

export default function UsersPage({}: Props) {
  return (
    <div className="flex flex-col gap-5  w-full">
      <PageTitle title="Users" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}