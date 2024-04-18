import {
  Box,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material'
import React from 'react'
import PeriodInput from '../../PeriodInput'
import ReportBtn from '../../ReportBtn'
import UnloadingBtn from '../../UnloadingBtn'
import { StyledInput } from '../../StyledComponetn/StyledInput'

function ByCalls() {
  const [timeZone, setTimeZone] = React.useState('10')

  const handleChange = (event: SelectChangeEvent) => {
    setTimeZone(event.target.value as string)
  }

  return (
    <>
      <Divider sx={{ marginBottom: 5 }} />
      <Box sx={{ display: 'flex', gap: 5, mb: 5 }}>
        <Box>
          <Typography variant="subtitle1">Часовой пояс</Typography>
          <Select
            sx={{ bgcolor: '#fff' }}
            value={timeZone}
            label="timeZone"
            onChange={handleChange}
          >
            <MenuItem value={'10'}>(GMT +3) Москва</MenuItem>
            <MenuItem value={'20'}>(GMT +4) Москва</MenuItem>
            <MenuItem value={'30'}>(GMT +2) Сингапур</MenuItem>
          </Select>
        </Box>

        <PeriodInput title="Период" />
      </Box>
      <Box sx={{ display: 'flex', gap: 5, mb: 5 }}>
        <Box>
          <Typography variant="subtitle1">А-номер</Typography>
          <StyledInput  variant="outlined" placeholder='Введите номер...'/>
        </Box>
        <Box>
          <Typography variant="subtitle1">А-номер</Typography>
          <StyledInput variant="outlined" placeholder='Введите номер...'/>
        </Box>

      </Box>

       <Box sx={{ display: 'flex', gap: 5, mb: 5 }}>
        <Box>
          <Typography variant="subtitle1">Навык</Typography>
          <Select
            sx={{ bgcolor: '#fff', minWidth: '400px' }}
            value={'3'}
            onChange={handleChange}
          >
            <MenuItem value={'1'}>Навык-1</MenuItem>
            <MenuItem value={'2'}>Навык-2</MenuItem>
            <MenuItem value={'3'}>Навык-3</MenuItem>
          </Select>
        </Box>

        <Box>
          <Typography variant="subtitle1">Агент</Typography>
          <Select
            sx={{ bgcolor: '#fff', minWidth: '400px' }}
            value={'2'}
            onChange={() =>{}}
          >
            <MenuItem value={'1'}>Агент-1</MenuItem>
            <MenuItem value={'2'}>Агент-2</MenuItem>
            <MenuItem value={'3'}>Агент-3</MenuItem>
          </Select>
        </Box>

      </Box>

      <Box sx={{ display: 'flex', gap: 5, mb: 5 }}>
        <Box>
          <Typography variant="subtitle1">GUCID</Typography>
          <StyledInput variant="outlined" placeholder='Введите GUCID'/>
        </Box>
        <Box>
          <Typography variant="subtitle1">Предпочитаемый агент</Typography>
          <Select
            sx={{ bgcolor: '#fff', minWidth: '400px' }}
            value={'1'}
            onChange={() =>{}}
          >
            <MenuItem value={'1'}>Агент-1</MenuItem>
            <MenuItem value={'2'}>Агент-2</MenuItem>
            <MenuItem value={'3'}>Агент-3</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <UnloadingBtn />
        <ReportBtn
          title="Просмотр отчета"
          navTo="/historicReports/historicReportTableByCalls"
        />
      </Box>
    </>
  )
}

export default ByCalls
