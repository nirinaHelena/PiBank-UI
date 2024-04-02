/** @format */
"use client";
import React from "react";
import {
  BarChart as BarGraph,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar
} from "recharts";

type Props = {};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 50000) + 100000
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 50000) + 100000
  }
];

export default function BarChart({}: Props) {
  return (
    <ResponsiveContainer width={"100%"} height={350}>
      <BarGraph data={data}>
        <XAxis
          dataKey={"name"}
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          stroke="#888888"
          fontSize={12}
          tickFormatter={(value) => `${value} Ar`}
        />
        <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
      </BarGraph>
    </ResponsiveContainer>
  );
}