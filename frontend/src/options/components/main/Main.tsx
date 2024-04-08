import * as React from 'react';
import Box from '@mui/material/Box';
import { ReactNode } from 'react';
interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, ml: 35 }}>
      {children}
    </Box>
  );
};

export default MainContent;
