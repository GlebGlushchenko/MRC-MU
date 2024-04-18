import {
  Box,
  Divider,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography
} from '@mui/material'
import React from 'react'
import MultipleSelectChip from '../../MultipleSelectChip'
import PeriodInput from '../../PeriodInput'
import ReportBtn from '../../ReportBtn'
import UnloadingBtn from '../../UnloadingBtn'

function AggregatedDataBySkills() {
  const [timeZone, setTimeZone] = React.useState('10')

  const handleChange = (event: SelectChangeEvent) => {
    setTimeZone(event.target.value as string)
  }

  const selectItems = ['skill-1', 'skill-2', 'skill-3']
  const skillsGroupe = ['Пакет-1', 'Пакет-2', 'Пакет-3']

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

      <MultipleSelectChip
        placeholder={'Выберите навык'}
        selectItems={selectItems}
        subtitle="Навык"
      />

      <MultipleSelectChip
        placeholder={'Выберите пакет навыков'}
        selectItems={skillsGroupe}
        subtitle="Пакет навыков"
      />

      <Box sx={{ display: 'flex', gap: 3 }}>
        <UnloadingBtn />

        <ReportBtn
          title="Просмотр отчета"
          navTo="/historicReports/historicReportTableByAggregatedSkills"
        />
      </Box>
    </>
  )
}

export default AggregatedDataBySkills
