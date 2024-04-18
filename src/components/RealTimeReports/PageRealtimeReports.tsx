import React from 'react'
import { SelectChangeEvent, Box } from '@mui/material'

import TypeReportSelect from '../ReportsUtils/TypeReportSelect'
import RealTimeByAgent from './RealTimeReportsByType/RealTimeByAgent'
import RealTimeBySkills from './RealTimeReportsByType/RealTimeBySkills'
import ReportsPageTitle from '../ReportsPageTitle'

const PageRealtimeReports = () => {
  const [selectedItem, setSelectedItem] = React.useState<string>('Placeholder')

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    setSelectedItem(value)
  }

  const reportsTypesItems = [
    'В реальном времени по агенту',
    'В реальном времени по навыку'
  ]

  const selectItems = [
    'Иван Иванович Иванов',
    'Александр Александрович Александров',
    'Гена Генадий Гена'
  ]

  return (
    <Box>
      <ReportsPageTitle title="Отчёты в реальном времени" />
      <TypeReportSelect
        selectedItem={selectedItem}
        handleChange={handleChange}
        reportsTypesItems={reportsTypesItems}
      />

      {selectedItem === 'В реальном времени по агенту' && (
        <RealTimeByAgent selectItems={selectItems} />
      )}

      {selectedItem === 'В реальном времени по навыку' && (
        <RealTimeBySkills selectItems={selectItems} />
      )}
    </Box>
  )
}

export default PageRealtimeReports
