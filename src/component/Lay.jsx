import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Lay = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-grow p-1">{children}</main>
      </div>
    </div>
  );
};

export default Lay;
