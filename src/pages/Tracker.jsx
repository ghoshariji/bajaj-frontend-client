import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const WebsiteViewsData = [
  { name: 'M', value: 30 },
  { name: 'T', value: 35 },
  { name: 'W', value: 32 },
  { name: 'T', value: 40 },
  { name: 'F', value: 50 },
  { name: 'S', value: 60 },
];

const DailySalesData = [
  { name: '1', value: 300 },
  { name: '2', value: 400 },
  { name: '3', value: 350 },
  { name: '4', value: 500 },
  { name: '5', value: 420 },
  { name: '6', value: 380 },
  { name: '7', value: 410 },
];

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

const Tracker = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {/* Website Views */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="text-gray-500 text-sm">Website Views</h3>
        <p className="text-gray-400 text-xs mb-2">Last Campaign Performance</p>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={WebsiteViewsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <span className="text-gray-400 text-xs">📅 Campaign sent 2 days ago</span>
      </div>

      {/* Daily Sales */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="text-gray-500 text-sm">Daily Sales</h3>
        <p className="text-gray-400 text-xs mb-2">18% increase in today sales</p>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={DailySalesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <span className="text-gray-400 text-xs">⏰ Updated 4 min ago</span>
      </div>

      {/* Completed Tasks */}
      <div className="bg-white p-4 rounded-2xl shadow-lg">
        <h3 className="text-gray-500 text-sm">Completed Tasks</h3>
        <p className="text-gray-400 text-xs mb-2">Last Campaign Performance</p>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart data={CompletedTasksData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
        <span className="text-gray-400 text-xs">🟢 Just updated</span>
      </div>
    </div>
  );
};

export default Tracker;