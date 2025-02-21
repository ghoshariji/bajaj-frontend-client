import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import axios from "axios";
import Lay from "../component/Lay";
import Tracker from "./Tracker";

const ProgressBar = ({ value }) => (
  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
    <div className="h-full bg-black" style={{ width: `${value}%` }}></div>
  </div>
);

const Card = ({ children, className }) => (
  <div className={`bg-white rounded-2xl shadow-lg p-4 ${className}`}>{children}</div>
);

const Leader = () => {
  const [userIds, setUserIds] = useState([]);
   const [userDetails, setUserDetails] = useState([]);
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

        console.log(res.data);
        setUserIds(res.data.userIds);
        setUserDetails(res.data.userDetails);
        setTopUsers(res.data.topUsers);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    if (token) fetchWorkouts();
  }, [token]);


  return (
    <Lay>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <aside className="col-span-3 bg-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold">Workout Progress</h2>
          <div className="mt-4 space-y-2">
            {[
              { label: "Squat", value: 1200 },
              { label: "Push-up", value: 1500 },
            ].map((item, index) => (
              <div key={index}>
                <p className="text-sm font-medium">{item.label}</p>
                <ProgressBar value={(item.value / 2000) * 100} />
              </div>
            ))}
          </div>
        </aside>
        

          {/* Main Content */}
          <main className="col-span-9 space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
            {topUsers.length > 0 ? (
              [...topUsers]
                .sort((a, b) => b.score - a.score) 
                .slice(0, 4) 
                .map((user, index) => (
                  <Card key={index} className="text-center">
                    <p className="text-gray-500 text-sm">Rank #{index + 1}</p>
                    <p className="text-lg font-semibold">{user.name}</p>
                    <p className="text-md font-medium">Score: {user.score}</p>
                  </Card>
                ))
            ) : (
              <p className="text-center col-span-4 text-gray-500">No top users found.</p>
            )}
          </div>
          
          

            {/**<Tracker>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Top Users Score Graph </h3>
              <select
                className="p-2 border rounded-md"
                value={selectedExercise}
                onChange={(e) => setSelectedExercise(e.target.value)}
              >
                <option value="push_up">Push Up</option>
                <option value="squat">Squat</option>
              </select>
            </div>
            <div className="h-60 mt-4 bg-gray-700 rounded-lg p-4">
              {topUsers.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={topUsers}>
                    <CartesianGrid strokeDasharray="3 3" stroke="white" />
                    <XAxis dataKey="name" stroke="white" />
                    <YAxis stroke="white" />
                    <Tooltip contentStyle={{ backgroundColor: "black", color: "white" }} />
                    <Bar dataKey="score" fill="white" />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <p className="text-white text-center">No user data available</p>
              )}
            </div>
          </Tracker>**/}
           


            <Card>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Top Users Score Graph </h3>
                <select
                  className="p-2 border rounded-md"
                  value={selectedExercise}
                  onChange={(e) => setSelectedExercise(e.target.value)}
                >
                  <option value="push_up">Push Up</option>
                  <option value="squat">Squat</option>
                </select>
              </div>
              <div className="h-60 mt-4 bg-gray-700 rounded-lg p-4">
                {topUsers.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topUsers}>
                      <CartesianGrid strokeDasharray="3 3" stroke="white" />
                      <XAxis dataKey="name" stroke="white" />
                      <YAxis stroke="white" />
                      <Tooltip contentStyle={{ backgroundColor: "black", color: "white" }} />
                      <Bar dataKey="score" fill="white" />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <p className="text-white text-center">No user data available</p>
                )}
              </div>
            </Card>




            {/* User Table */}
         {/**    <Card>
              <h3 className="text-lg font-semibold">User Rankings</h3>
              <table className="w-full mt-4 text-sm">
                <thead>
                  <tr className="text-left">
                    <th>Rank</th>
                    <th>User</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {topUsers.length > 0 ? (
                    topUsers.map((user, index) => (
                      <tr key={index} className="border-t">
                        <td>#{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.score}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="3" className="text-center text-gray-500">
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </Card>*/}

            
          </main>
        </div>
      </div>
    </Lay>
  );
};

export default Leader;
