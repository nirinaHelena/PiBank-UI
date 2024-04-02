import React from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";

// Données factices pour les catégories et les montants
const categoryData = [
 { name: "Food", value: 2000 },
 { name: "Internet", value: 1500 },
 { name: "Transport", value: 1000 },
 { name: "Leasures", value: 500 },
];

const transactionData = [
  { name: "Jan", expenses: 500, income: 2000 },
  { name: "Feb", expenses: 800, income: 2500 },
  { name: "Mar", expenses: 700, income: 1800 },
  { name: "Apr", expenses: 1000, income: 2200 },
  { name: "May", expenses: 600, income: 2100 },
  { name: "Jun", expenses: 900, income: 2400 },
  { name: "Jul", expenses: 1200, income: 2600 },
  { name: "Aug", expenses: 950, income: 2300 },
  { name: "Sep", expenses: 850, income: 2000 },
  { name: "Oct", expenses: 1100, income: 2800 },
  { name: "Nov", expenses: 750, income: 1900 },
  { name: "Dec", expenses: 1300, income: 2700 },
 ];

// Définition des couleurs pour chaque tranche de PieChart
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

// Fonction pour préparer les données pour le PieChart
const preparePieChartData = (data) => {
 return data.map((entry, index) => ({
    ...entry,
    fill: COLORS[index % COLORS.length], // Couleurs pour chaque tranche de PieChart
 }));
};

// Composant fonctionnel pour les graphiques
const Charts = () => {
 return (
    <div>
      {/* Graphique Pie-Chart */}
      <ResponsiveContainer width={"100%"} height={300}>
        <PieChart>
          <Pie data={preparePieChartData(categoryData)} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
            {categoryData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      {/* Graphique LineChart */}
      <ResponsiveContainer width={"100%"} height={300}>
        <LineChart data={transactionData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" dataKey="expenses" stroke="#8884d8" name="Expenses" />
          <Line type="monotone" dataKey="income" stroke="#82ca9d" name="Income" />
        </LineChart>
      </ResponsiveContainer>
    </div>
 );
};

export default Charts;
