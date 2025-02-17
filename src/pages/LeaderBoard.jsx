import React from "react";
import Layout from "../component/Layout";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const leaderboardData = [
  { name: "John Doe", score: 950 },
  { name: "Jane Smith", score: 920 },
  { name: "Michael Lee", score: 880 },
  { name: "Emily Davis", score: 860 },
  { name: "Chris Brown", score: 830 },
];

const Leader = () => {
  return (
    <Layout>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Leaderboard</h2>
        
        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2 text-left">Rank</th>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-left">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">#{index + 1}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Leaderboard Graph */}
        <div className="mt-6 w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leaderboardData} layout="vertical" margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="name" width={100} />
              <Tooltip cursor={{ fill: "#f0f0f0" }} />
              <Bar dataKey="score" fill="#4f46e5" barSize={30} radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Leader;
