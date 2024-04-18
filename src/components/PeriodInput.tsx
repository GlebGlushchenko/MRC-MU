import { Box, Typography } from '@mui/material'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react'

type PeriodInputPorps = { 
  title: string
}

const PeriodInput: React.FC<PeriodInputPorps> = ({title}) => {
  return (
    <Box>
          <Typography variant="subtitle1">{title}</Typography>
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ bgcolor: '#fff' }} />
            </LocalizationProvider>
            <Typography variant="subtitle1">—</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker sx={{ bgcolor: '#fff' }} />
            </LocalizationProvider>
          </Box>
        </Box>
  )
}

export default PeriodInput