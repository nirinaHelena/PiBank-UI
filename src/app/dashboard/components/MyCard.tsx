import React from 'react';
import profilePicture from "../../../../public/images/profile.png"
import Image from "next/image";

function MyCard() {
  return (
   <div className="bg-gradient-to-tr from-slate-900 to-gray-700 shadow-md rounded-2xl p-2 flex flex-col items-center">
    <div className="flex flex-row items-center w-auto h-32-">
    <Image
            src={profilePicture}
            alt="PiBank Logo"
            className='w-20 h-20 rounded-full'
            layout="fixed"
            objectFit="cover"
          />
    <div className="mt-4">
        <h2 className='text-2xl text-white font-bold'>PiBank Card</h2>
        <h3 className="text-lg font-medium text-gray-200">Sullivan Joro</h3>
        <p className="text-slate-400">1234 5678 9876 5432</p>
        <p className='text-slate-400'>Valide jusqu'au 06/2026</p>
      </div>
    </div>
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-gray-200">Ariary 1.480.000</h2>
      <p className="text-slate-600">Solde actuel</p>
    </div>
  </div>
  )
}

export default MyCard;