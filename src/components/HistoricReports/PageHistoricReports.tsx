import React from 'react'
import TypeReportSelect from '../ReportsUtils/TypeReportSelect'
import { Box } from '@mui/material'

import { SelectChangeEvent } from '@mui/material/Select'
import AggregatedDataBySkills from './HistoricReportsType/AggregatedDataBySkills'
import ReportsPageTitle from '../ReportsPageTitle'
import ByCalls from './HistoricReportsType/ByCalls'
import ByWorkingTime from './HistoricReportsType/ByWorkingTime'
import ByTracingAgent from './HistoricReportsType/ByTracingAgent'

const HistoricReports = () => {
  const [selectedItem, setSelectedItem] = React.useState<string>('Placeholder')

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    setSelectedItem(value)
  }

  const reportsTypesItems = [
    'Агрегированные данные по навыку',
    'Детальный по звонкам',
    'Контроль рабочего времени агентов',
    'Трассировка по агентам'
  ]

  return (
    <Box>
      <ReportsPageTitle title="Исторические отчёты" />
      <TypeReportSelect
        selectedItem={selectedItem}
        handleChange={handleChange}
        reportsTypesItems={reportsTypesItems}
      />

      {selectedItem === 'Агрегированные данные по навыку' && (
        <AggregatedDataBySkills />
      )}

      {selectedItem === 'Детальный по звонкам' && <ByCalls />}

      {selectedItem === 'Контроль рабочего времени агентов' && <ByWorkingTime />}

      {selectedItem === 'Трассировка по агентам' && <ByTracingAgent />}
    </Box>
  )
}
export default HistoricReports
