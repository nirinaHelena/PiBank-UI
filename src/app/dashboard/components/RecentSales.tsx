"use client"
import React, { useEffect } from 'react';
import Chart from 'chart.js';
import { error } from 'console';

const RecentSales = () => {
  const salesData = [
    {
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      amount: 1999,
    },
    {
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      amount: 39,
    },
    {
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      amount: 299,
    },
    {
      name: 'William Kim',
      email: 'will@email.com', // Correction de l'email de William Kim
      amount: 99,
    },
    {
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      amount: 39,
    },
  ];

  const salesChartData = {
    labels: salesData.map((sale) => sale.name),
    datasets: [{
      label: 'Montant des ventes',
      data: salesData.map((sale) => sale.amount),
      backgroundColor: ['#F7CAC9', '#4285F4', '#DB4437', '#FFC2C2', '#8BC34A'],
      borderColor: ['#F7CAC9', '#4285F4', '#DB4437', '#FFC2C2', '#8BC34A'],
      borderWidth: 1,
    }],
  };

  useEffect(() => {
    const canvas = document.getElementById('recentSalesChart');
    if(canvas){
        const ctx = (canvas as HTMLCanvasElement).getContext('2d');
        if (ctx){
    new Chart(ctx, {
      type: 'bar',
      data: salesChartData,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Répartition des ventes récentes'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  } else {
    console.error("Impossible d'obtenir le contexte 2d du canvas.");
  } 
  } else {
    console.error("L'element du canvas avec l'ID 'recentSalesChart' n'a pas été trouvé");
  }
},[]);

  return (
    <div className="card p-4">
      <h2 className="text-xl font-bold">Ventes récentes</h2>

      <div className="flex flex-col">
        <p className="text-sm text-gray-500">Vous avez fait 265 ventes </p>
        <canvas id="recentSalesChart" width="100%" height="400"></canvas>
      </div>
    </div>
  );
};

export default RecentSales;
