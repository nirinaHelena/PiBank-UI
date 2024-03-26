import React from 'react';
import MyCard from "./components/MyCard"
import ExpensesStatistics from "./components/ExpensesStatistics"
import Card from "./components/Card"
import TransactionsList from "./components/TransactionsList"
import RecentSales from "./components/RecentSales"


const Dashboard= () => {
  return (
    <main className="container m-auto">
    <div className="mx-auto max-w-5xl justify-center m-auto grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2  gap-3">
      <MyCard/>
      <ExpensesStatistics/>
      <RecentSales/>
      <Card title="Transactions récentes" content={<TransactionsList />} />

    </div>
  </main>
  );
};

export default Dashboard;
