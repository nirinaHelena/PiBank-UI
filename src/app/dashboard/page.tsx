import PageTitle from "@/components/PageTitle";
import { DollarSign, Percent, CreditCard,Wallet } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";

const cardData: CardProps[] = [
  {
    label: "Total Income",
    amount: "Ar 3 540 000",
    description: "+20.1% from last month",
    icon: CreditCard
  },
  {
    label: "Loans",
    amount: "Ar 500 000",
    description: "amount borrowed from bank",
    icon: DollarSign
  },
  {
    label: "Economy",
    amount: "+12,234",
    description: "+12% from last month",
    icon: Wallet
  },
  {
    label: "Interest on loans",
    amount: "13%",
    description: "amount of interest on bank loans",
    icon: Percent
  }
];


export default function Home() {

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
      </section>
    </div>
  );
}
