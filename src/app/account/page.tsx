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

interface User {
  id :  string;
  firstName : string;
  lastName : string;
  birthday : {
    nanos : 0;
  };
  netMonthSalary : number;
}

interface Account {
  accountNumber : string;
  idUser : string;
}

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

const fetchData =async () : Promise<UserDetails[]> => {
  const usersResponse = await fetch("http://localhost:8080/user");
  const users : User[] = await usersResponse.json();

  const accountsResponse = await fetch("http://localhost:8080/account");
  const accounts : Account[] = await accountsResponse.json();

  const userDetails = users.map((user) =>{
    const matchingAccount = accounts.find((account) => account.idUser == user.id);
    return{
      name : `${user.firstName} ${user.lastName}`,
      salary : user.netMonthSalary,
      birthday : new Date(user.birthday.nanos).toLocaleDateString(),
      accountNumber : matchingAccount ? matchingAccount.accountNumber : "",
    };
  });
  return userDetails;
};

export default function AccountsPage({}: Props) {
  const [data, setData] = useState<UserDetails[]>([]);
  useEffect(() => {
    const fetchUsers =async () => {
      const userDetails = await fetchData();
      setData(userDetails);
    };
    fetchUsers();
  }, []);

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