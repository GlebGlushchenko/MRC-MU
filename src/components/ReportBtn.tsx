import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledButton } from './StyledComponetn/StyledButton'
import ListAltIcon from '@mui/icons-material/ListAlt'

type PropsType = {
  navTo: string,
  title?: string
}

const ReportBtn: React.FC<PropsType> = ({navTo, title = 'Просмотр отчета'}) => {
  return (
    <NavLink to={navTo}>
    <StyledButton startIcon={<ListAltIcon />}>
      {title}
    </StyledButton>
  </NavLink>
  )
}

export default ReportBtn
