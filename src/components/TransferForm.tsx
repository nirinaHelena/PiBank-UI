import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  amount: z.number().min(0, "Amount must be a positive number."),
  reason: z.string().min(2, "Reason must be at least 2 characters."),
  effectiveDate: z.date().min(new Date(), "Effective date must be in the future."),
  registrationDate: z.date().min(new Date(), "Registration date must be in the future."),
});

function DepositForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      reason: "",
      effectiveDate: new Date().toISOString().split('T')[0],
      registrationDate: new Date().toISOString().split('T')[0],
    }
  });

  const onSubmit = (data) => {
    console.log(data);
   };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-1">Amount:</label>
        <input type="number" {...register("amount")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.amount && <p className="text-red-700">{errors.amount.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Reason:</label>
        <input type="text" {...register("reason")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.reason && <p className="text-red-700">{errors.reason.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Effective Date:</label>
        <input type="date" {...register("effectiveDate")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.effectiveDate && <p className="text-red-700">{errors.effectiveDate.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Registration Date:</label>
        <input type="date" {...register("registrationDate")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.registrationDate && <p className="text-red-700">{errors.registrationDate.message}</p>}
      </div>

      <button type="submit" className="text-black py-2 px-4 rounded hover:border-blue-900 focus:outline-none font-semibold items-center">Deposit</button>
    </form>
  );
}

export default DepositForm;
