import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const Cards = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState("");
  const [repeatDaily, setRepeatDaily] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await axios.post(`${import.meta.env.VITE_SERVER}/api/schedule`, {
        userId: "65a4bcdef0123456789abcd",
        time,
        repeatDaily,
      });
      setLoading(false);
      alert("Schedule set successfully!");
      setShowModal(false);
    } catch (error) {
      setLoading(false);

      console.error("Error scheduling:", error);
    }
  };

  const [user, setUser] = useState(null);
  const token = localStorage.getItem("token");

  const [ai, setAi] = useState({});
  const fetchData = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${import.meta.env.VITE_SERVER}/api/users/user`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setLoading(false);

      console.log(res.data.aiResponses[0]);
      setUser(res.data.user);
      setAi(res.data.aiResponses[0]);
    } catch (error) {
      setLoading(false);

      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {/* First Card with Set Schedule Button */}
      {loading && <Loader />}

      <div className="p-4 bg-gradient-to-r from-purple-300 to-purple-100 rounded-xl shadow-sm">
        <h3 className="text-gray-600 text-sm">
          "Push harder, grow stronger daily." 💪🔥
        </h3>
        <p className="text-3xl font-semibold mt-1">
          Burn 500–1000 kcal/day to lose about 0.5–1 kg per week.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
          onClick={() => setShowModal(true)}
        >
          Set Schedule
        </button>
      </div>

      {/* Other Cards (No Changes) */}
      <div className="p-4 bg-gradient-to-r from-orange-300 to-orange-100 rounded-xl shadow-sm">
        <h3 className="text-gray-600 text-sm">Your Status</h3>
        <p className="text-3xl font-semibold mt-1 text-red-500">
          {user && user.name} -         <span className="text-gray-500 text-xs">{user && user.email}</span>

        </p>

        {/* Take New Challenge Button */}
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg shadow-md hover:bg-red-600 transition"
          onClick={() => window.location.href = `http://localhost:8080/?token=${localStorage.getItem("token")}`}
          >
          Take New Challenge
        </button>
      </div>

      <div className="p-4 bg-gradient-to-r from-green-300 to-green-100 rounded-xl shadow-sm">
        <p className="text-2xl font-semibold mt-1 uppercase">{ai && ai.text}</p>
        <div className="flex justify-between mt-2">
          <span className="text-gray-500 text-xs">{ai && ai.aiResponse}</span>
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
