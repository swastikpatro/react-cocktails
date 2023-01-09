import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
