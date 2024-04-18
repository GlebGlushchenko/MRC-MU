import { Divider } from '@mui/material'
import MultipleSelectChip from '../../MultipleSelectChip'
import { StyledButton } from '../../StyledComponetn/StyledButton'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { NavLink } from 'react-router-dom'

type RealTimeToSkillsProps = {
  selectItems: string[]
}

const RealTimeBySkills: React.FC<RealTimeToSkillsProps> = ({ selectItems }) => {
  return (
    <>
      <Divider sx={{ marginBottom: 5 }} />

      <MultipleSelectChip selectItems={selectItems} subtitle='Навык' />
      <MultipleSelectChip selectItems={selectItems} subtitle='Пакет навыков' />

      <NavLink to="/realTimeReport/realTimeReportSkills">
        <StyledButton startIcon={<ListAltIcon />}>Просмотр отчета</StyledButton>
      </NavLink>
    </>
  )
}

export default RealTimeBySkills
