import React from 'react'
import TypeReportSelect from './TypeReportSelect'
import { Box, Button, Typography, styled } from '@mui/material'

import Divider from '@mui/material/Divider'

import { SelectChangeEvent } from '@mui/material/Select'
import MultipleSelectChip from './MultipleSelectChip'
import { NavLink } from 'react-router-dom'
import ListAltIcon from '@mui/icons-material/ListAlt'

export default function RealtimeReport() {
  const StyledButton = styled(Button)({
    color: 'black',
    border: '1px solid rgba(0, 0, 0, 0.5)',
    textTransform: 'none',
    backgroundColor: '#fff'
  })

  const [selectedItem, setSelectedItem] = React.useState<string>('Placeholder')

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    setSelectedItem(value)
  }

  return (
    <Box>
      <Typography
        sx={{ fontWeight: 700, marginBottom: 5 }}
        variant="h4"
        component="h4"
      >
        Отчёты в реальном времени
      </Typography>
      <Divider sx={{ marginBottom: 5 }} />
      <TypeReportSelect
        selectedItem={selectedItem}
        handleChange={handleChange}
      />

      {selectedItem === 'В реальном времени по агенту' && (
        <div>
          <Divider sx={{ marginBottom: 5 }} />
          <Typography variant="subtitle1">Агент</Typography>
          <MultipleSelectChip />

          <Typography variant="subtitle1">Группа агентов</Typography>
          <MultipleSelectChip />

          <Typography variant="subtitle1">Набор агентов</Typography>
          <MultipleSelectChip />
          <NavLink to="/realTimeReportAgent">
            <StyledButton startIcon={<ListAltIcon />}>
              Просмотр отчета
            </StyledButton>
          </NavLink>
        </div>
      )}
    </Box>
  )
}
