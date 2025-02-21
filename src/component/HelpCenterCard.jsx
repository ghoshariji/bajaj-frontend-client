import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle } from 'lucide-react';

const HelpCenterCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 text-center relative overflow-hidden mr-auto w-full max-w-sm md:max-w-md lg:max-w-lg mt-auto">
    <div className="flex justify-center mt-4 md:mt-6">
      <div className="bg-red-500 text-white p-3 rounded-full">
        <HelpCircle size={24} />
      </div>
    </div>
    <h3 className="text-gray-800 font-semibold mt-2 text-lg md:text-xl">
      Help Center
    </h3>
    <p className="text-gray-500 text-sm md:text-base mt-1">
      Having trouble in Finti? Please contact us for more questions.
    </p>
    <Link
      to="/help-center"
      className="inline-block mt-3 bg-gray-100 text-gray-800 rounded-lg px-4 py-2 text-sm md:text-base font-semibold hover:bg-gray-200 transition"
    >
      Go To Help Center
    </Link>
  </div>
  
  );
};

export default HelpCenterCard;