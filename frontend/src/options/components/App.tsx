import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, redirect, useLocation } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerComponent from './drawer/Drawer';
import MyFlightsComponent from './flights/MyFlights';
import ProfileComponent from './profile/Profile';
import MainContent from './main/Main';
import ComparativeAQIChart from './dashboard/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <DrawerComponent />
      <MainContent>
        <Routes>
          <Route path="/" element={<ComparativeAQIChart></ComparativeAQIChart>} />
          <Route path="/js/options.html" element={<Navigate to="/" />} />
          <Route path="/my-flights" element={<MyFlightsComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
        </Routes>
      </MainContent>
    </>
  );
};

export default App;
