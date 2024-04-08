import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, redirect } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerComponent from './drawer/Drawer';
import MyFlightsComponent from './flights/MyFlights';
import ProfileComponent from './profile/Profile';
import MainContent from './main/Main';
import { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    redirect('/my-flights');
  });
  return (
    <Router>
      <CssBaseline />
      <DrawerComponent />
      <MainContent>
        <Routes>
          <Route path="/" element={<Navigate to="/my-flights" />} />
          <Route path="/js/options.html" element={<Navigate to="/my-flights" />} />
          <Route path="/my-flights" element={<MyFlightsComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
        </Routes>
      </MainContent>
    </Router>
  );
};

export default App;
