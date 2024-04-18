import React from 'react'
import { Divider } from '@mui/material'
import MultipleSelectChip from '../../MultipleSelectChip'
import ReportBtn from '../../ReportBtn'

type RealTimeToAgentProps = {
  selectItems: string[]
}

const RealTimeByAgent: React.FC<RealTimeToAgentProps> = ({ selectItems }) => {
  return (
    <>
      <Divider sx={{ marginBottom: 5 }} />

      <MultipleSelectChip selectItems={selectItems} subtitle='Агент'/>
      <MultipleSelectChip selectItems={selectItems} subtitle='Группа агентов'/>
      <MultipleSelectChip selectItems={selectItems} subtitle='Набор агентов'/>

      <ReportBtn navTo='/realTimeReport/realTimeReportAgent'/>
    </>
  )
}

export default RealTimeByAgent
