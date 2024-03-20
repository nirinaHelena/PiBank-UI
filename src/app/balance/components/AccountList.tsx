"use client"
import React from 'react';

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(amount);
};

const AccountList = ({ accounts, selectedAccountId, setSelectedAccountId }: {
  accounts: { id: string; name: string; balance: number; }[];
  selectedAccountId: string;
  setSelectedAccountId: (id: string) => void;
}) => {
   
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium text-gray-900">Comptes</h3>
      <ul className="mt-4">
        {accounts.map((account) => (
          <li
            key={account.id}
            className={`cursor-pointer py-2 px-4 rounded-md hover:bg-gray-100 ${
              selectedAccountId === account.id ? 'bg-blue-500 text-white' : 'text-gray-900'
            }`}
            onClick={() => setSelectedAccountId(account.id)}
          >
            {account.name} (Solde: {formatCurrency(account.balance)})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountList;
