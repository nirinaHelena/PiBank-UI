import React from 'react';

const ExpensesStatistics = () => {
  return (
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
        <h3 className="text-lg font-medium text-gray-900">Statistiques des dépenses</h3>

        <div className="flex flex-col mt-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500">Nombre total de transactions</p>
            <h2 className="text-lg font-medium text-gray-900">2155</h2>
          </div>

          <div className="flex items-center justify-between mb-4">
            <p className="text-gray-500">Dépenses moyennes</p>
            <h2 className="text-lg font-medium text-gray-900">Ar 450 000</h2>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-500">Dépenses les plus élevées</p>
            <h2 className="text-lg font-medium text-gray-900">Ar 2 500 000</h2>
          </div>
        </div>
      </div>
  );
};

export default ExpensesStatistics;
