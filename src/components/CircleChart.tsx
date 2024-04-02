/** @format */
"use client";
import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const categoryData = [
 { name: "Food", value: Math.floor(Math.random() * 50000) + 100000 },
 { name: "Internet", value: Math.floor(Math.random() * 50000) + 100000},
 { name: "Transport", value: Math.floor(Math.random() * 50000) + 100000},
 { name: "Leasures", value: Math.floor(Math.random() * 50000) + 100000},
 { name: "Home", value: Math.floor(Math.random() * 50000) + 100000},

];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#CB2821"];

export default function CircleChart() {
 return (
    <ResponsiveContainer width={"100%"} height={300}>
      <PieChart>
        <Pie
          data={categoryData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {categoryData.map((entry, value) => (
            <Cell key={`${value} Ar`} fill={COLORS[value % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
 );
}
