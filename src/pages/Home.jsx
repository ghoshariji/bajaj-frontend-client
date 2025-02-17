import React, { useEffect, useState } from "react";
import Layout from "../component/Layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [userIds, setUserIds] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const [topUsers, setTopUsers] = useState([]);
  const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

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
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Rank Section */}
        <div className="bg-white p-6 shadow-md rounded-lg sm:col-span-1 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Top Ranked Users</h2>
          <ul>
            {topUsers.length > 0 &&
              topUsers.map((user, index) => (
                <li
                  key={index}
                  className="flex justify-between p-2 border-b last:border-none"
                >
                  <span className="font-medium">{user.name}</span>
                  <span className="text-gray-500">{user.score} pts</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Workout Challenges */}
        <div className="bg-white p-6 shadow-md rounded-lg sm:col-span-1 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">New Challenges</h2>
          <div className="flex justify-center">
            <Link
              to={`https://aiwork-omega.vercel.app/?token=${localStorage.getItem("token")}`} // The URL you want to navigate to
              className="bg-blue-500 text-white px-6 py-3 rounded-md flex items-center"
            >
              View All Challenges <ChevronRight className="ml-2" />
            </Link>
          </div>
        </div>

        {/* Performance Analytics */}
        <div className="bg-white p-6 shadow-md rounded-lg sm:col-span-1 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Performance Analytics</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={topUsers ? topUsers : []} layout="vertical">
              <YAxis dataKey="name" type="category" width={100} />
              <XAxis type="number" hide />
              <Tooltip />
              <Bar dataKey="score" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
