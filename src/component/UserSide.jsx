import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


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

const Userside = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">

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

export default Userside;