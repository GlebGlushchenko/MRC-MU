import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ReactVirtualizedTable from './Tabel'

export default function RealTimeReportAgent() {
  const StyledButton = styled(Button)({
    color: 'black',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    textTransform: 'none',
    backgroundColor: 'white',
    padding: 5,
    minWidth: 0
  })

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
        <NavLink to={'/realTimeReport'}>
          <StyledButton disableElevation>
            <ArrowBackIcon />
          </StyledButton>
        </NavLink>
        <Typography sx={{ fontWeight: 700 }} variant="h4" component="h4">
          Отчет в реальном времени по агенту
        </Typography>
      </Box>
      <ReactVirtualizedTable />
    </>
  )
}
