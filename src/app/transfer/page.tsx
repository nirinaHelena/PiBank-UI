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

interface User {
  id : string;
  firstName : string;
  lastName : string;
}

interface Account {
  id : string ;
  accountNumber : string ;
  mainBalance : number;
  loans : number;
  interestLoans : number;
  creditAllow : number;
  overDraftLimit : boolean;
  interestBefore7 : number;
  interstAfter7 : number;
  idUser : string;
  bank : string;
}

interface Transfer {
  id : string;
  reference : string;
  transferReason : string;
  amount : number;
  label : string;
  effectiveDate : string;
  registrationDate : string;
  isCanceled : boolean;
  idAccount : string;
  accountReceiver : string;
}

interface Transaction {
  id : string;
  idTransfer : string;
  idAccount : string;
  category : string;
  type : string; //"INCOME" or "OUTCOME"
  date : string ;
}

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

const fetchData = async () : Promise<TransferDetails[]> => {
  const usersResponse = await fetch("http://localhost:8080/user");
  const users : User[] = await usersResponse.json();

  const accountsResponse = await fetch("http://loaclhost:8080/account");
  const accounts : Account[] = await accountsResponse.json();

  const transfersResponse = await fetch("http://localhost:8080/transfer");
  const transfers : Transfer[] = await transfersResponse.json();
  
  const transactionsResponse = await fetch("http://localhost:8080/transaction");
  const transactions : Transaction[] = await transactionsResponse.json();

  const transferDetails : TransferDetails[] = [];

  for(const transaction of transactions){
    const matchedTransfer = transfers.find((t) => t.id === transaction.idTransfer);
    if(matchedTransfer){
      const matchedAccount = accounts.find((a) => a.id === matchedTransfer.idAccount);
      if(matchedAccount){
        const user = users.find((u) => u.id === matchedAccount.idUser);
        if(user){
          const saleAmount = transaction.type === "INCOME" ? "+" : "-";
          transferDetails.push({
            name : `${user.firstName} ${user.lastName}`,
            account : matchedAccount.accountNumber,
            saleAmount : `<span class="math-inline">\{saleAmount\}</span>{matchedTransfer.amount}`,
            date : transaction.date,
          });
        }
      }
    }
  }
  return transferDetails;
};


function Transfer() {
  const [data, setData] = useState<TransferDetails[]>([]);

  useEffect(() => {
    const fetchTransfers = async () => {
      const transferDetails = await fetchData();
      setData(transferDetails);
    };
    
    fetchTransfers();
  }, []);
  
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
      <DataTable columns={columns} data={data} />
        </div>
      </div>
  );
}


export default Transfer;