import { Button } from '@mui/material'
import SaveAltIcon from '@mui/icons-material/SaveAlt'

const UnloadingBtn = () => {
  return (
    <Button sx={{textTransform: 'none',}} variant="contained" startIcon={<SaveAltIcon />}>
    Выгрузить в Excel
  </Button>
  )
}

export default UnloadingBtn