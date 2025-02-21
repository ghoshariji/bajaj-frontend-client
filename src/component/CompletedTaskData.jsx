import React from 'react';
  import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

  const CompletedTasksData = [
    { name: 'Apr', value: 200 },
    { name: 'May', value: 400 },
    { name: 'Jun', value: 300 },
    { name: 'Jul', value: 500 },
    { name: 'Aug', value: 400 },
    { name: 'Sep', value: 450 },
    { name: 'Oct', value: 390 },
    { name: 'Nov', value: 460 },
    { name: 'Dec', value: 550 },
  ];

  const leaderboardData = [
    {
      id: 2,
      name: 'Jackson',
      score: 1847,
      username: '@username',
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_hybrid', // Replace with actual image URL
    },
    {
      id: 1,
      name: 'Eiden',
      score: 2430,
      username: '@username',
      image: 'https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg?semt=ais_hybrid', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Emma Aria',
      score: 1674,
      username: '@username',
      image: 'https://img.freepik.com/free-photo/beautiful-male-half-length-portrait-isolated-white-studio-background-young-emotional-hindu-man-blue-shirt-facial-expression-human-emotions-advertising-concept-standing-smiling_155003-25250.jpg?semt=ais_hybrid', // Replace with actual image URL
    },
  ];

  const Userside = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 h-50 bg-white-900">
        {/* Left Side - Chart */}
        <div className="bg-white p-4 rounded-2xl shadow-lg flex flex-col justify-center">
          <h3 className="text-gray-500 text-sm">Completed Tasks</h3>
          <p className="text-gray-400 text-xs mb-2">Last Campaign Performance</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={CompletedTasksData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
          <span className="text-gray-400 text-xs mt-2">🟢 Just updated</span>
        </div>

        {/* Right Side - Leaderboard */}
        <div className="bg-gray-800 rounded-2xl p-6 text-white flex items-center justify-center">
          <div className="relative flex items-end gap-4">
            {/* Second Place */}
            <div className="flex flex-col items-center w-28">
              <img
                src={leaderboardData[0].image}
                alt={leaderboardData[0].name}
                className="w-20 h-20 rounded-full border-4 border-blue-400"
              />
              <span className="text-lg mt-2">{leaderboardData[0].name}</span>
              <span className="text-blue-400 text-xl font-bold">{leaderboardData[0].score}</span>
              <span className="text-gray-400 text-sm">{leaderboardData[0].username}</span>
            </div>

            {/* First Place */}
            <div className="flex flex-col items-center w-32 relative">
              <img
                src={leaderboardData[1].image}
                alt={leaderboardData[1].name}
                className="w-24 h-24 rounded-full border-4 border-yellow-400"
              />
              <div className="absolute -top-8">
                🏆 {/* King crown emoji */}
              </div>
              <span className="text-lg mt-2">{leaderboardData[1].name}</span>
              <span className="text-yellow-400 text-2xl font-bold">{leaderboardData[1].score}</span>
              <span className="text-gray-400 text-sm">{leaderboardData[1].username}</span>
            </div>

            {/* Third Place */}
            <div className="flex flex-col items-center w-28">
              <img
                src={leaderboardData[2].image}
                alt={leaderboardData[2].name}
                className="w-20 h-20 rounded-full border-4 border-green-400"
              />
              <span className="text-lg mt-2">{leaderboardData[2].name}</span>
              <span className="text-green-400 text-xl font-bold">{leaderboardData[2].score}</span>
              <span className="text-gray-400 text-sm">{leaderboardData[2].username}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Userside;