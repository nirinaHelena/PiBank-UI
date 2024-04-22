import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define the Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, "Name should have at least 2 characters").max(50, "Name should not exceed 50 characters."),
  firstname: z.string().min(2, "Firstname should have at least 2 characters").max(50, "Firstname should not exceed 50 characters."),
  birthday: z.date().refine(date => date <= calculateThresholdDate(), "You must be at least 21 years old"),
  salary: z.number().min(0, "Salary should be a positive number"),
  accountNumber: z.number().refine(() => Math.floor(Math.random() * 1000000000), "Account number generated"),
});

// Function to calculate the threshold date for age validation
function calculateThresholdDate() {
  const today = new Date();
  today.setFullYear(today.getFullYear() - 21);
  return today;
}

function generateAccountNumber() {
    return Math.floor(Math.random() * 10000000000000000).toString().padStart(16, '0');
  }

function FormAccount() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      firstname: "",
      birthday: undefined,
      salary: undefined,
      accountNumber: generateAccountNumber(),
    },
  });

  const onSubmit = async (data) => {
    data.accountNumber= generateAccountNumber();
    console.log(data);
    // create user
    const userResponse = await fetch('http:localhost:8080/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: data.accountNumber,
        firstName: data.firstname,
        lastName: data.name,
        birthdayDate: data.birthday,
        netMonthSalary: data.salary,
      }),
    });
    if (!userResponse.ok) {
      console.error('Failed to create user');
      return;
    }

    const userData = await userResponse.json();
    // create account
    const accountResponse = await fetch('http://localhost:8080/account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: userData.id,
        accountNumber: data.accountNumber,
        mainBalance: 0,
        loans: 0,
        interstLoans : 0,
        creditAllow: 0,
        overDraftLimit : false,
        interestRateBefore7Days: 0,
        interestRateAfter7Days: 0,
        user: userData.id,
        bank: 1,
      }),
    });

    if (!accountResponse.ok) {
      console.error('Failed to create account');
      return;
    }
    console.log('User and account created successfully');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-8">
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input {...register("name")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.name && <p className="text-red-700">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Firstname</label>
        <input {...register("firstname")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.firstname && <p className="text-red-700">{errors.firstname.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Birthday</label>
        <input type="date" {...register("birthday")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.birthday && <p className="text-red-700">{errors.birthday.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Salary</label>
        <input type="number" {...register("salary")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950" />
        {errors.salary && <p className="text-red-700">{errors.salary.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Account Number</label>
        <input type="number" {...register("accountNumber")} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-950"/>
        {errors.accountNumber && <p className="text-red-700">{errors.accountNumber.message}</p>}
      </div>

      <button type="submit" className="text-black py-2 px-4 rounded hover:border-blue-900 focus:outline-none font-semibold items-center">Create</button>
    </form>
  );
}

export default FormAccount;
