import React from "react";

const ProgressBar = () => {
  const progressData = [
    { title: "Tasks In Progress", value: 210, change: 23, color: "text-red-500", barColor: "bg-red-500" },
    { title: "Monthly Tasks Summary", value: 1240, change: 145, color: "text-teal-500", barColor: "bg-teal-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      {progressData.map((item, index) => (
        <div key={index} className="bg-white p-4 rounded-2xl shadow-lg relative">
          <h3 className="text-gray-500 text-sm mb-1">{item.title}</h3>
          <div className="flex items-end space-x-2">
            <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
            <span className="text-xs text-green-500">{item.change}↗</span>
          </div>
          <span className="text-gray-400 text-xs">Current Month</span>
          <div className="absolute right-4 bottom-4 flex items-end space-x-1">
            {[1, 2, 3, 4, 5, 6].map((barIndex) => (
              <div
                key={barIndex}
                className={`w-3 rounded ${barIndex === 3 ? item.barColor : "bg-gray-200"}`}
                style={{ height: `${Math.random() * 50 + 20}px` }}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
