import PageTitle from "@/components/PageTitle";
import { DollarSign, Percent, CreditCard,Wallet } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import CircleChart from "@/components/CircleChart";
import { useEffect, useState } from "react";

type Account = {
  id : string;
  accountNumber : string;
  mainBalance : number;
  loans : number;
  interestLoans : number;
  creditAllow : number;
  overDraftLimit : boolean;
  interestRateBefore7Days : number;
  interestRateAfter7Days : number;
  user : string ;
  bank : string;
}

type AccountDetails = {
  mainBalance : number;
  loans : number;
  interestRateBefore7Days : number;
}
const cardData: CardProps[] = [
  {
    label: "Total Income",
    amount: "",
    description: "+20.1% from last month",
    icon: CreditCard
  },
  {
    label: "Loans",
    amount: "",
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
    amount: "",
    description: "amount of interest on bank loans",
    icon: Percent
  }
];


export default function Home() {
  const [accountData, setAccountData] = useState<AccountDetails>({} as AccountDetails);

  useEffect(() => {
    const fetchData =async () => {
      const response = await fetch("http://locahost:8080/account");
      const account : Account = await response.json();

      setAccountData({
        mainBalance : account.mainBalance,
        loans : account.loans,
        interestRateBefore7Days :account.interestRateBefore7Days * 100 ,
      });
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Dashboard" />
      <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {cardData.map((d, i) => (
          <Card
            key={i}
            amount={accountData[d.label.toLowerCase()]?.toString() || d.amount}
            description={d.description}
            icon={d.icon}
            label={d.label}
          />
        ))}
      </section>
      <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
        <CardContent>
          <p className="p-4 font-semibold">Overview Annually</p>
          <BarChart />
        </CardContent>
        <CardContent>
          <p className="p-4 font-semibold">Overview Monthly</p>
          <CircleChart/>
        </CardContent>
      </section>
    </div>
  );
}
