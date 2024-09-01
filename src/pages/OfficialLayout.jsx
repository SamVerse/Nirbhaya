import React from 'react';
import { Outlet } from 'react-router-dom';
import OfficialBottomBar from './OfficialBottomBar/OfficialBottomBar';

const OfficialLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pb-16">
        <Outlet />
      </main>
      <OfficialBottomBar />
    </div>
  );
};

export default OfficialLayout;