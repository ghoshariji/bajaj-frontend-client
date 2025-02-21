import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import axios from "axios";
import Lay from "../component/Lay";

const ProgressBar = ({ value }) => (
  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
    <div className="h-full bg-black" style={{ width: `${value}%` }}></div>
  </div>
);

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-2xl shadow-lg p-4 ${className}`}>{children}</div>
);

const Leader1 = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("push_up");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/workouts/user`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setTopUsers(res.data.topUsers);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };
    if (token) fetchWorkouts();
  }, [token]);

  const filteredUsers = topUsers.filter((user) =>
    user.workoutNames.includes(selectedExercise)
  );

  return (
    <Lay>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-3 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">Workout Statistics</h2>
            <div className="mt-4 space-y-2">
              {["push_up", "squat"].map((exercise, index) => (
                <button
                  key={index}
                  className={`w-full p-2 text-left rounded-md transition-all ${
                    selectedExercise === exercise ? "bg-black text-white" : "bg-gray-200"
                  }`}
                  onClick={() => setSelectedExercise(exercise)}
                >
                  {exercise.replace("_", " ").toUpperCase()}
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-span-9 space-y-6">
            {/* Bar Chart */}
            <Card>
              <h3 className="text-lg font-semibold">Top Users Score Graph</h3>
              <div className="h-60 mt-4 bg-gray-700 rounded-lg p-4">
                {filteredUsers.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={filteredUsers.map((user) => ({
                        name: user.userDetails.name,
                        score: user.totalScore,
                      }))}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="white" />
                      <XAxis dataKey="name" stroke="white" />
                      <YAxis stroke="white" />
                      <Tooltip contentStyle={{ backgroundColor: "black", color: "white" }} />
                      <Bar dataKey="score" fill="white" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-white text-center">No data available</p>
                )}
              </div>
            </Card>

            {/* User Rankings */}
            <Card>
              <h3 className="text-lg font-semibold">User Rankings</h3>
              <table className="w-full mt-4 text-sm border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-2 text-left">#</th>
                    <th className="p-2 text-left">User</th>
                    <th className="p-2 text-left">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map((user, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2">#{index + 1}</td>
                        <td className="p-2">{user.userDetails.name}</td>
                        <td className="p-2">{user.totalScore}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-gray-500 p-3">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Card>
          </main>
        </div>
      </div>
    </Lay>
  );
};

export default Leader1;