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
type UserDetails = {
  id: string;
  name: string;
  salary: number;
  birthday: string;
  accountNumber: string;
};


export default function AccountsPage({}: Props) {
  const [users, setUsers] = useState<UserDetails[]>([]);

  useEffect(() => {
    const fetchUsersAndAccounts = async () => {
      const userResponse = await fetch("http://localhost:8080/user");
      const accountResponse = await fetch("http://localhost:8080/account");
      
      const userData = await userResponse.json();
      const accountData = await accountResponse.json();

      // Mapping and combining user and account data
      const combinedData = userData.map(user => {
        const account = accountData.find(acc => acc.user === user.id);
        return {
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          salary: user.netMonthSalary,
          birthday: new Date(user.birthdayDate.nanos / 1000000).toISOString().split('T')[0], // Conversion de nanos à une date ISO
          accountNumber: account ? `**** **** **** ${account.accountNumber.slice(-4)}` : 'N/A', // Masquer les numéros de compte pour la sécurité
        };
      });

      setUsers(combinedData);
    };

    fetchUsersAndAccounts();
  }, []);

  const columns: ColumnDef<UserDetails>[] = [
    {
      accessorKey: "name",
      header: "Name",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "accountNumber",
      header: "Account Number",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "birthday",
      header: "Birthday",
      cell: info => info.getValue(),
    },
    {
      accessorKey: "salary",
      header: "Salary Monthly",
      cell: info => info.getValue().toLocaleString(),
    },
  ];
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
      <DataTable columns={columns} data={users} />
      </div>
    </div>
   
  );
}