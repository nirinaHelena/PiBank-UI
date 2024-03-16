"use client"

import React from 'react';
import { useRouter } from 'next/router';

const LandingPage: React.FC = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push('/signup');
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-800">PiBank</h1>
          <p className="mt-4 text-gray-600">
            The Bank of the Future - Easy, Secure, Fast
          </p>
        </header>

        <main className="mt-8 flex flex-col">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Experience Banking in a New Way
            </h2>
            <p className="mt-4 text-gray-600">
              PiBank offers comprehensive financial services, meeting all your needs.
            </p>
          </div>

          <div className="mt-8 flex flex-row justify-between">
            <button className="py-2 px-4 bg-blue-500 text-white rounded-md" onClick={handleSignUp}>
              Sign Up
            </button>
            <a href="#" className="py-2 px-4 bg-gray-300 text-gray-600 rounded-md">
              Learn More
            </a>
          </div>
        </main>

        <footer className="mt-8">
          <div className="flex flex-row justify-between">
            <p className="text-gray-600">
              Copyright © {new Date().getFullYear()} PiBank
            </p>
            <div className="flex flex-row">
              <a href="#" className="mr-4 text-gray-600">
                About Us
              </a>
              <a href="#" className="text-gray-600">
                Programs
              </a>
              <a href="#" className="text-gray-600">
                Contact Us
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
