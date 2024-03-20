import React from 'react';
import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../../public/images/cyber-monday-sale-credit-cards-keyboard.jpg";

const LandingPage= () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center" >
    <Image
        src={backgroundImage}
        alt='Background Image'
        layout='fill'
        objectFit='cover'
        />
      <div className="max-w-7xl mx-auto relative">
        <header className="flex flex-col items-center">
          <h1 className="text-3xl font-bold text-gray-100">PiBank</h1>
          <p className="mt-4 text-gray-200">
            The Bank of the Future - Easy, Secure, Fast
          </p>
        </header>

        <main className="mt-8 flex flex-col">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-100">
              Experience Banking in a New Way
            </h2>
            <p className="mt-4 text-gray-200">
              PiBank offers comprehensive financial services, meeting all your needs.
            </p>
          </div>

          <div className="mt-8 flex flex-row justify-between">
            <Link href="/dashboard">
            <button className="py-2 px-4 bg-red-700 text-white rounded-md">
              Connect
            </button>
            </Link>
            <a className="py-2 px-4 bg-black text-gray-200 rounded-md">
              Learn More
            </a>
          </div>
        </main>
        <footer className="mt-8">
          <div className="flex flex-row justify-between">
            <p className="text-gray-200">
              Copyright © {new Date().getFullYear()} PiBank
            </p>
            <div className="flex flex-row">
              <a href="#" className="mr-4 text-gray-100">
                About Us
              </a>
              <a href="#" className=" mr-4 text-gray-100">
                Programs
              </a>
              <a href="#" className="mr-2 text-gray-100">
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
