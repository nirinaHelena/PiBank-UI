/** @format */
"use client";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

type Category = {
  category_name : string;
  total_amount : number;
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#CB2821"];

export default function CircleChart() {
  const [categoryData, setData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData =async () => {
      const response = await fetch("http://localhost:8080/transfer/amounts/category");
      const data : {
        total_amount : number;
        category : string
      }[] = await response.json();
      
      const formattedData = data.map((item) => ({category_name : item.category, total_amount : item.total_amount}));
      setData(formattedData);
    };
    fetchData();
  }, []);
 return (
    <ResponsiveContainer width={"100%"} height={400}>
      <PieChart>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label={({category_name, total_amount }) => `${(total_amount / 1000).toFixed(0)}k Ar in ${(category_name)}`} // Affichage des montants au millier près

        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
 );
}
