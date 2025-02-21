import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity- backdrop-blur-md z-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
        <h2 className="text-white mt-4">Loading...</h2>
      </div>
    </div>
  );
};

export default Loader;
