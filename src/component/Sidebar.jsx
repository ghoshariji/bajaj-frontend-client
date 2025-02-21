import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Home, User, Settings, LogOut } from "lucide-react";
import HelpCenterCard from "./HelpCenterCard";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();

  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className={`${
        isSidebarOpen ? "w-64" : "w-16"
      } bg-gray-800 text-white transition-all duration-300 flex flex-col h-screen`}
    >
      <div className="flex items-center justify-between p-4">
        <span
          className={`${isSidebarOpen ? "block" : "hidden"} text-lg font-bold`}
        >
          Dashboard
        </span>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className="flex flex-col flex-grow">
        <Link
          to="/"
          className={`flex items-center px-4 py-2 hover:bg-gray-700 ${
            isActive("/") ? "bg-gray-700" : ""
          }`}
        >
          <Home size={24} />
          <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>Dashboard</span>
        </Link>

        <Link
          to="/leader"
          className={`flex items-center px-4 py-2 hover:bg-gray-700 ${
            isActive("/leader") ? "bg-gray-700" : ""
          }`}
        >
          <User size={24} />
          <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>Leader</span>
        </Link>


        <Link
          to="/setting"
          className={`flex items-center px-4 py-2 hover:bg-gray-700 ${
            isActive("/setting") ? "bg-gray-700" : ""
          }`}
        >
          <Settings size={24} />
          <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>Settings</span>
        </Link>

        <div className={`pr-2 py-2 h-full flex flex-col ${isSidebarOpen ? "block" : "hidden"}`}>
          <HelpCenterCard />
        </div>

        <button
          className="flex items-center px-4 py-2 mt-auto hover:bg-red-600 cursor-pointer"
          onClick={handleLogout}
        >
          <LogOut size={24} />
          <span className={`${isSidebarOpen ? "ml-4" : "hidden"}`}>Logout</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
