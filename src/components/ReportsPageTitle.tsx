import React from 'react'
import { Divider, Typography } from '@mui/material'

type PropsType = {
  title: string
}

const ReportsPageTitle: React.FC<PropsType> = ({title}) => {
  return (
    <>
      <Typography
        sx={{ fontWeight: 700, marginBottom: 5 }}
        variant="h4"
        component="h4"
      >
        {title}
      </Typography>
      <Divider sx={{ marginBottom: 5 }} />
    </>
  )
}

export default ReportsPageTitle
