import React from 'react';
import MyCard from "./components/MyCard"
import ExpensesStatistics from "./components/ExpensesStatistics"
import Card from "./components/Card"
import TransactionsList from "./components/TransactionsList"


const Dashboard= () => {
  return (
    <main className=" flex flex-col ">
    <div className="mx-auto max-w-5xl gap-6 justify-center flex flex-grow">
      <MyCard />
      <ExpensesStatistics/>
      <Card title="Transactions récentes" content={<TransactionsList />} />

    </div>
  </main>
  );
};

export default Dashboard;
