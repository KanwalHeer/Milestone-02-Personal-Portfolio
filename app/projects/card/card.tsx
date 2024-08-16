import React from 'react';
import Link from 'next/link';

const Card = ({ heading, text, link }:any) => {
  return (
    <div className="bg-[#060d0ef1] text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{heading}</h2>
      <p className="text-gray-400 mb-4">{text}</p>
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 bg-[#000505] text-white text-center py-2 px-4 rounded-lg hover:bg-[#060d0ef1] transition-colors"
      >
        View Project
      </Link>
    </div>
  );
};

export default Card;
