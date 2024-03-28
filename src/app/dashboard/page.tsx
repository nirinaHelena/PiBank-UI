import PageTitle from "@/components/PageTitle";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard, { SalesProps } from "@/components/SalesCard";

const cardData: CardProps[] = [
  {
    label: "Total Income",
    amount: "Ar 3 540 000",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Last expenses",
    amount: "Ar 150000",
    description: "Jirama",
    icon: CreditCard
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity
  }
];

const userSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    account: "**** **** **** 1258",
    saleAmount: "+2500000",
    date: "2024-03-25"
  },
  {
    name: "Jackson Lee",
    account: "**** **** **** 5478",
    saleAmount: "+600000",
    date: "2024-03-24"
  },
  {
    name: "Isabella Nguyen",
    account: "**** **** **** 6512",
    saleAmount: "-800000",
    date: "2024-03-23"
  },
  {
    name: "Isabella Nguyen",
    account: "**** **** **** 9513",
    saleAmount: "-150000",
    date: "2024-03-22"
  },
  {
    name: "Isabella Nguyen",
    account: "**** **** **** 7514",
    saleAmount: "+200000",
    date: "2024-03-21"
  },
];

const sortTransactionsByDate = (transactions: SalesProps[]) => {
  return transactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export default function Home() {
  const recentTransactions = sortTransactionsByDate(userSalesData).slice(0, 5);

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview</p>
          <BarChart />
        </CardContent>
        <CardContent className="flex justify-between gap-4">
          <section>
            <p>Recent Transaction</p>
            <p className="text-sm text-gray-400">
              See here your last Transaction
            </p>
          </section>
          {recentTransactions.map((d, i) => (
            <SalesCard
              key={i}
              account={d.account}
              name={d.name}
              saleAmount={d.saleAmount}
              date={d.date}
            />
          ))}
        </CardContent>
      </section>
    </div>
  );
}
