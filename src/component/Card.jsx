import React from 'react';

const Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      <div className="p-4 bg-gradient-to-r from-purple-300 to-purple-100 rounded-xl shadow-sm">
        <h3 className="text-gray-600 text-sm">Your Working Balance</h3>
        <p className="text-3xl font-semibold mt-1">PKR 9,250,000</p>
        <span className="text-gray-500 text-xs">Saving Account</span>
      </div>
      <div className="p-4 bg-gradient-to-r from-orange-300 to-orange-100 rounded-xl shadow-sm">
        <h3 className="text-gray-600 text-sm">Your Saving Status</h3>
        <p className="text-3xl font-semibold mt-1 text-red-500">4.28%</p>
        <span className="text-gray-500 text-xs">Your spending increased</span>
      </div>
      <div className="p-4 bg-gradient-to-r from-green-300 to-green-100 rounded-xl shadow-sm">
        <h3 className="text-gray-600 text-sm">Card Number</h3>
        <p className="text-2xl font-semibold mt-1">3829 4820 4629 5025</p>
        <div className="flex justify-between mt-2">
          <span className="text-gray-500 text-xs">Anita Rose</span>
          <span className="text-gray-500 text-xs">09/17</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;