import React from 'react';

interface Transaction {
    date: string;
    description: string;
    amount: number;
  }
  
  const TransactionsList = () => {
    const transactions: Transaction[] = [
      {
        date: '2024-03-15',
        description: 'Transfert à Dera Mirado',
        amount: -100_000,
      },
      {
        date: '2024-03-14',
        description: 'Achat chez Super U',
        amount: -164_200,
      },
      {
        date: "2024-02-28",
        description: 'Salaire mois de Février',
        amount: 1500000
      }
      // ... autres transactions
    ];
  
    return (
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.date} className="mb-2">
            <p className="text-gray-500">{transaction.date}</p>
            <p>{transaction.description}</p>
            <span className={transaction.amount > 0 ? 'text-green-500' : 'text-red-500'}>
              {transaction.amount.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    );
  };
  
  export default TransactionsList;
  