import React from 'react';
import { Container } from '@mui/material';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import RealtimeReport from './components/RealtimeReport';
import HistoricReports from './components/HistoricReports';
import RealTimeReportAgent from './components/RealTimeReportAgent';


const App: React.FC = () => {
  return (
    <Container maxWidth="xl" sx={{  marginTop: '70px', padding: 5, maxWidth: '1600px' }}>
      <NavBar />
      
      <Routes>
         <Route>
          <Route path='realTimeReport' element={<RealtimeReport />} />
          <Route path='historiReaports' element={<HistoricReports />} />
          <Route path='realTimeReportAgent' element={<RealTimeReportAgent />} />
        </Route>
      </Routes>

    </Container>
  );
};

export default App;