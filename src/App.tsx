import React from 'react'
import { Container } from '@mui/material'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import PageRealtimeReports from './components/RealTimeReports/PageRealtimeReports'
import HistoricReports from './components/HistoricReports/PageHistoricReports'
import RealTimeTable from './components/ReaportsTable/RealTimeTable'
import HistoricTable from './components/ReaportsTable/HistoricTable'

const App: React.FC = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{ marginTop: '70px', padding: 5, maxWidth: '1600px' }}
    >
      <NavBar />

      <Routes>
        <Route>
          <Route path="/" element={<PageRealtimeReports />} />
          <Route path="realTimeReport" element={<PageRealtimeReports />} />
          <Route path="historicReports/" element={<HistoricReports />} />

          <Route
            path="realTimeReport/realTimeReportAgent"
            element={<RealTimeTable />}
          />
          <Route
            path="realTimeReport/realTimeReportSkills"
            element={<RealTimeTable />}
          />

          <Route
            path="historicReports/historicReportTableByAggregatedSkills"
            element={<HistoricTable />}
          />
          <Route
            path="historicReports/historicReportTableByCalls"
            element={<HistoricTable />}
          />
          <Route
            path="historicReports/historicReportTableByWorkingTimeControl"
            element={<HistoricTable />}
          />
          <Route
            path="historicReports/historicReportTableByTracingAgent"
            element={<HistoricTable />}
          />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
