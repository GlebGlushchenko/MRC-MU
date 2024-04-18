import React from 'react'
import {
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

function CustomPagination() {
  const prevBtn = () => {
    return (
      <Typography sx={{ display: 'flex', gap: 1 }}>
        <ArrowBackIcon />
        Назад
      </Typography>
    )
  }

  const nextBtn = () => {
    return (
      <Typography sx={{ display: 'flex', gap: 1 }}>
        Вперед
        <ArrowForwardIcon />
      </Typography>
    )
  }

  return (
    <TableContainer sx={{ borderTop: 0 }} component={Paper}>
      <Table
        sx={{
          minWidth: 650,
          display: 'flex',
          justifyContent: 'center',
          borderTop: 0
        }}
        aria-label="simple table"
      >
        <TableHead sx={{ display: 'flex', justifyContent: 'center' }}>
          <TableRow>
            <TableCell>
              <Stack spacing={2}>
                <Pagination
                  variant="outlined"
                  shape="rounded"
                  count={10}
                  renderItem={(item) => (
                    <PaginationItem
                      slots={{
                        next: nextBtn,
                        previous: prevBtn
                      }}
                      {...item}
                    />
                  )}
                />
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  )
}

export default CustomPagination
