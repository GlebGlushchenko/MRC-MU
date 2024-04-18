import { Box, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { StyledButton } from './StyledComponetn/StyledButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import SaveAltIcon from '@mui/icons-material/SaveAlt'

type ReportTableTitleProps = {
  title: string
  isAddExcelBtn: boolean,
  backTo: string
}

const ReportTableTitle: React.FC<ReportTableTitleProps> = ({
  title,
  isAddExcelBtn = false,
  backTo
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 5
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <NavLink style={{ backgroundColor: 'white' }} to={backTo}>
          <StyledButton>
            <ArrowBackIcon sx={{ color: 'black' }} />
          </StyledButton>
        </NavLink>
        <Typography sx={{ fontWeight: 700 }} variant="h4" component="h4">
          {title}
          {/* Агрегированные данные по навыку */}
        </Typography>
      </Box>
      {isAddExcelBtn && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <StyledButton startIcon={<SaveAltIcon />}>
            Выгрузить в Excel
          </StyledButton>
        </Box>
      )}
    </Box>

    //   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
    //   <NavLink style={{ backgroundColor: '#fff' }} to={'/realTimeReport'}>
    //     <StyledButton>
    //       <ArrowBackIcon sx={{ color: 'black' }} />
    //     </StyledButton>
    //   </NavLink>
    //   <Typography sx={{ fontWeight: 700 }} variant="h4" component="h4">
    //     {title}
    //   </Typography>
    // </Box>
  )
}

export default ReportTableTitle
