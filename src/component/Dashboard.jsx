import React from 'react';
import Cards from './Card';
import Userside from './Userside';
import Lay from './Lay';
const Dashboard = () => {


  return (
    <Lay>
    <div className="flex h-screen">
      <div className="flex-1 p-1 overflow-auto">
        <Cards />
        <Userside/>
      </div>
    </div>
    </Lay>
  );
};

export default Dashboard;