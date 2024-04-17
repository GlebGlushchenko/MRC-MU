// import React from 'react'
// import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
// import { NavLink } from 'react-router-dom'

// const Navbar: React.FC = () => {
//   return (
//     <AppBar color="inherit" position="fixed">
//       <Toolbar variant="dense">
//         <Box sx={{ marginRight: '30px' }}>
//           <Typography variant="h6">
//             <img alt="Logo" style={{ height: 40 }} />
//           </Typography>
//         </Box>
//         <NavLink to="/realTimeReport" style={{marginRight: '10px'}}>
//           <Button variant="text" color="primary" sx={{ color: 'black' }}>
//             Отчёты в реальном времени
//           </Button>
//         </NavLink>

//         <NavLink to="/historiReaports">
//           <Button variant="text" color="primary" sx={{ color: 'black' }}>
//             Исторические отчёты
//           </Button>
//         </NavLink>
//       </Toolbar>
//     </AppBar>
//   )
// }

// export default Navbar
import React from 'react';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom'

const NavBar: React.FC = () => {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box >
          <Typography variant="h6" component="div">
            <img src="/path/to/your/logo.png" alt="Логотип" style={{ height: 40, marginRight: 40 }} /> {/* Замените на путь к вашему логотипу */}
          </Typography>
        </Box>
        <NavLink to="/realTimeReport">
          <Button sx={{color: 'black'}} color="inherit">Отчёты в реальном времени</Button>
        </NavLink>
        <NavLink to="/historiReaports">
          <Button sx={{color: 'black'}} color="inherit">Исторические отчёты</Button>
        </NavLink>
        
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
