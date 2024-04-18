import * as React from 'react'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Table } from '@mui/material'
import { TableData } from '../types/TableTypes'

import CustomPagination from './CustomPagination'

type TableProps = {
  data: TableData[]
}

const ReportsTable: React.FC<TableProps> = ({ data }) => {

  const columns = Object.keys(data[0])
  
  return (
    <>
      <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead sx={{ backgroundColor: '#3333' }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column}>{column}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column}>{row[column]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomPagination/>
    </>
  )
}
export default ReportsTable
