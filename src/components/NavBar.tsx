import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed" sx={{bgcolor: 'white'}}>
      <Toolbar>
        <Box >
          <Typography variant="h6" component="div">
            <img src="/path/to/your/logo.png" alt="Логотип" style={{ height: 40, marginRight: 40 }} /> {/* Замените на путь к вашему логотипу */}
          </Typography>
        </Box>
        <NavLink to="/realTimeReport">
          <Button sx={{color: 'black'}}>Отчёты в реальном времени</Button>
        </NavLink>
        <NavLink to="/historicReports">
          <Button sx={{color: 'black'}}>Исторические отчёты</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
