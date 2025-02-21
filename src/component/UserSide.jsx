import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Loader from "./Loader";

const CompletedTasksData = [
  { name: "Apr", value: 200 },
  { name: "May", value: 400 },
  { name: "Jun", value: 300 },
  { name: "Jul", value: 500 },
  { name: "Aug", value: 400 },
  { name: "Sep", value: 450 },
  { name: "Oct", value: 390 },
  { name: "Nov", value: 460 },
  { name: "Dec", value: 550 },
];

const Userside = () => {
  const [workouts, setWorkouts] = useState({ squats: [], pushUps: [] });
  const [showSquats, setShowSquats] = useState(true);
  const [workoutData, setWorkoutData] = useState([]);
  const [aiInsights, setAiInsights] = useState("");
    const [loading,setLoading] = useState(false)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/workouts/top-workouts`
        );
        setLoading(false)

        setWorkouts(response.data);
      } catch (error) {
        setLoading(false)

        console.error("Error fetching workout data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      setShowSquats((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const fetchWorkoutData = async () => {
      try {
        setLoading(true)

        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/workouts/top-workouts-graph`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setLoading(false)

        console.log(response.data);
        setWorkoutData(response.data.workouts);
        setAiInsights(response.data.insights);
      } catch (error) {
        setLoading(false)

        console.error("Error fetching workout data:", error);
      }
    };

    fetchWorkoutData();
  }, []);

  const leaderboardData = showSquats ? workouts.squats : workouts.pushUps;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 h-50 bg-white-900">
      {/* Left Side - Chart */}
      {loading && <Loader />}

      <div className="bg-gray-800 text-white p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">🏋️‍♂️ Workout Progress</h2>

        {/* Workout Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col justify-center">
          <h3 className="text-gray-500 text-sm">Completed Workouts</h3>
          <p className="text-gray-400 text-xs mb-2">Performance Over Time</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={workoutData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="result"
                stroke="#22c55e"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
          <span className="text-gray-400 text-xs mt-2">🟢 Data Updated</span>
        </div>

        {/* AI Insights */}
        <div className="mt-6 p-4 bg-gray-700 rounded-lg">
          <h3 className="text-xl font-semibold">💡 AI Insights</h3>
          <p className="text-gray-300 text-sm mt-2">
            {aiInsights || "Loading insights..."}
          </p>
        </div>
      </div>

      {/* Right Side - Leaderboard */}
      <div className="bg-gray-800 rounded-2xl p-6 text-white flex items-center justify-center">
        <div className="relative flex items-end gap-4">
          {leaderboardData.slice(0, 3).map((user, index) => (
            <div
              key={user._id}
              className={`flex flex-col items-center ${index === 1 ? "w-32 relative" : "w-28"}`}
            >
              <img
                src={
                  user.name === "Squat"
                    ? user.image ||
                      "https://t3.ftcdn.net/jpg/04/37/32/50/360_F_437325084_Ug4x7sOUEtfr56qy2nCfTN8zYKLZbbuw.jpg"
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlhGMSTu1et-7v_c4XC6OeS0UytAvSWQzXw&s"
                }
                alt={user.name}
                className={`rounded-full border-4 ${
                  index === 1
                    ? "w-24 h-24 border-yellow-400"
                    : index === 0
                      ? "w-20 h-20 border-blue-400"
                      : "w-20 h-20 border-green-400"
                }`}
              />
              {index === 1 && <div className="absolute -top-8">🏆</div>}
              <span className="text-lg mt-2">{user.name}</span>
              <span
                className={`font-bold text-xl ${
                  index === 1
                    ? "text-yellow-400 text-2xl"
                    : index === 0
                      ? "text-blue-400"
                      : "text-green-400"
                }`}
              >
                {user.result}
              </span>
              <span className="text-gray-400 text-sm">{user.username}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userside;
