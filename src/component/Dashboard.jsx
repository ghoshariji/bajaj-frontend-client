import React from 'react';
import Sidebar from './Sidebar';
import Cards from './Card';
import ProgressBar from './ProgressBar';
import Userside from './Userside';
import Lay from './Lay';
const Dashboard = () => {


  return (
    <Lay>
    <div className="flex h-screen">
      <div className="flex-1 p-1 overflow-auto">
        <Cards />
         <ProgressBar />
        <Userside/>
      </div>
    </div>
    </Lay>
  );
};

export default Dashboard;