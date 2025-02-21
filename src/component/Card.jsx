import React, { useState,useEffect } from "react";
import axios from "axios";

const Cards = () => {
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("");
  const [repeatDaily, setRepeatDaily] = useState(false);

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/schedule", {
        userId: "65a4bcdef0123456789abcd", 
        time,
        repeatDaily, 
      });
      alert("Schedule set successfully!");
      setShowModal(false);
    } catch (error) {
      console.error("Error scheduling:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {/* First Card with Set Schedule Button */}

       <div className="p-4 bg-gradient-to-r from-purple-300 to-purple-100 rounded-xl shadow-sm">
        <h3 className="text-gray-600 text-sm">Your Working Balance</h3>
        <p className="text-3xl font-semibold mt-1">PKR 9,250,000</p>
        <span className="text-gray-500 text-xs">Saving Account</span>
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          Set Schedule
        </button>
      </div>

      {/* Other Cards (No Changes) */}
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold">Set Time</h2>
      
            {/* Time Input */}
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-2 p-2 border rounded w-full"
            />
      
            {/* Repeat Daily Checkbox */}
            <div className="mt-3 flex items-center">
              <input
                type="checkbox"
                id="repeatDaily"
                checked={repeatDaily}
                onChange={() => setRepeatDaily(!repeatDaily)}
                className="mr-2"
              />
              <label htmlFor="repeatDaily" className="text-sm text-gray-600">
                Repeat Daily
              </label>
            </div>
      
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleSubmit}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Cards;
