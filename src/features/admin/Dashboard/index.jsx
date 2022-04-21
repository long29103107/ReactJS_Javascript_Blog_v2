import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';

function Dashboard() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default Dashboard;