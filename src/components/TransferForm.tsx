import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const formSchema = z.object({
  amount: z.number().min(0, "Amount must be a positive number."),
  reason: z.string().min(2, "Reason must be at least 2 characters."),
  effectiveDate: z.date().min(new Date(), "Effective date must be in the future."),
  registrationDate: z.date().min(new Date(), "Registration date must be in the future."),
  accountSender: z.string().min(2, "Account Sender must be at least 2 characters."),
  accountReceiver: z.string().min(2, "Account Receiver must be at least 2 characters."),
});

interface TransferFormValues {
  amount: number;
  reason: string;
  effectiveDate: string;
  registrationDate: string;
  accountSender: string;
  accountReceiver: string;
}

function DepositForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TransferFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 0,
      reason: "",
      effectiveDate: new Date().toISOString().split('T')[0],
      registrationDate: new Date().toISOString().split('T')[0],
      accountSender: "",
      accountReceiver: ""
    }
  });

  const [additionalReceivers, setAdditionalReceivers] = useState<string[]>([]);

  const handleAddReceiver = () => {
    setAdditionalReceivers([...additionalReceivers, ""]);
  };

  const handleReceiverChange = (index: number, value: string) => {
    const updatedReceivers = [...additionalReceivers];
    updatedReceivers[index] = value;
    setAdditionalReceivers(updatedReceivers);
  };

  const onSubmit = async (data: TransferFormValues) => {
    console.log(data);

    const transfers = additionalReceivers.map((receiver) => ({
      ...data,
      accountReceiver: receiver
    }));

    try {
      const response = await fetch('http://localhost:8080/transfers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transfers)
      });

      const responseData = await response.json();

      console.log(responseData); 

      reset();
    } catch (error) {
      console.error('Error creating transfers:', error);
    }
  };

  return (
    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
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

      <div className="mb-4">
        <label className="block mb-1">Account Sender:</label>
        <input type="text" {...register("accountSender")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.accountSender && <p className="text-red-700">{errors.accountSender.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Account Receiver:</label>
        <input type="text" {...register("accountReceiver")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.accountReceiver && <p className="text-red-700">{errors.accountReceiver.message}</p>}
      </div>

      {additionalReceivers.map((receiver, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-1">Account Receiver {index + 1}:</label>
          <input
            type="text"
            value={receiver}
            onChange={(e) => handleReceiverChange(index, e.target.value)}
            className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950"
          />
          {/* Add error handling if needed */}
        </div>
      ))}

      <button type="button" onClick={handleAddReceiver} className="mb-4 text-black py-2 px-4 rounded hover:border-blue-900 focus:outline-none font-semibold items-center">Add Another Receiver</button>

      <button type="submit" className="text-black py-2 px-4 rounded hover:border-blue-900 focus:outline-none font-semibold items-center">Deposit</button>
    </form>
    </div>
  );
}

export default DepositForm;
