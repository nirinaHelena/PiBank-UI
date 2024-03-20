import React from 'react';

interface CardProps {
    title: string;
    content: React.ReactNode;
  }
  
  const Card = ({ title, content }: CardProps) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 mt-8">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="mt-4">{content}</div>
      </div>
    );
  };
  
  export default Card;
  