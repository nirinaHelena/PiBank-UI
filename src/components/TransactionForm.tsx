import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  account: z.string().length(16, "Account number must be 16 digits long."),
  date: z.date().min(new Date(), "Withdrawal date must be in the future."),
  amount: z.number().min(0, "Amount must be a positive number."),
});

function TransactionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        account : "0123456789101112",
        date: 2025-12-31,
        amount: 1000000,
    }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-1">Account:</label>
        <input type="text" {...register("account")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.account && <p className="text-red-700">{errors.account.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Withdrawal Date:</label>
        <input type="date" {...register("date")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.date && <p className="text-red-700">{errors.date.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Amount to Withdraw:</label>
        <input type="number" {...register("amount")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.amount && <p className="text-red-700">{errors.amount.message}</p>}
      </div>

      <button type="submit" className="text-black py-2 px-4 rounded hover:border-blue-900 focus:outline-none font-semibold items-center">Withdraw</button>
    </form>
  );
}

export default TransactionForm;
