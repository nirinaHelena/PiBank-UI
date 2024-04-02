"use client "
import React from 'react';
import BalanceSummary from "./components/BalanceSummary"
import AccountList from './components/AccountList';
function Balance() {
  return (
    <div className="mx-auto max-w-7xl">
    <AccountList 
    accounts={[{ id: '1', name: 'Compte 1', balance: 1000 }, { id: '2', name: 'Compte 2', balance: 2000 }]}
    selectedAccountId="1"
    setSelectedAccountId={(id) => console.log(id)}/>    
    </div>
  );
}

export default Balance;
