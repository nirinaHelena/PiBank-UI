import React from 'react';

const BalanceSummary = ({ balance }: { balance: number }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-8">
      <h3 className="text-lg font-medium text-gray-900">Solde total</h3>
      <p className="text-3xl font-bold text-gray-900">{balance.toFixed(2)}</p>
    </div>
  );
};

export default BalanceSummary;
