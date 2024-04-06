import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import DrawerComponent from './drawer/Drawer';
import MyFlightsComponent from './flights/MyFlights';
import ProfileComponent from './profile/Profile';
import MainContent from './main/Main';

interface Props {
  window?: () => Window;
}

const App: React.FC<Props> = ({ window }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <DrawerComponent />
      <MainContent>
        <Routes>
          <Route path="/myflights" element={<MyFlightsComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
        </Routes>
      </MainContent>
    </BrowserRouter>
  );
};

export default App;
