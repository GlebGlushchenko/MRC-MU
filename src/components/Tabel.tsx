import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TableVirtuoso, TableComponents } from 'react-virtuoso'
import { Pagination, Stack } from '@mui/material'

interface Data {
  calories: number
  carbs: number
  dessert: string
  fat: number
  id: number
  protein: number
}

interface ColumnData {
  dataKey: keyof Data
  label: string
  numeric?: boolean
  width: number
}

type Sample = [string, number, number, number, number]

const sample: readonly Sample[] = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9]
]

function createData(
  id: number,
  dessert: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
): Data {
  return { id, dessert, calories, fat, carbs, protein }
}

const columns: ColumnData[] = [
  {
    width: 50,
    label: 'ID агена',
    dataKey: 'dessert'
  },
  {
    width: 150,
    label: 'Имя агента',
    dataKey: 'calories',
    numeric: true
  },
  {
    width: 100,
    label: 'Состояние',
    dataKey: 'fat',
    numeric: true
  },
  {
    width: 100,
    label: 'Время',
    dataKey: 'carbs',
    numeric: true
  },
  {
    width: 100,
    label: 'Рабочее место',
    dataKey: 'protein',
    numeric: true
  },
  {
    width: 100,
    label: 'Рабочее место',
    dataKey: 'protein',
    numeric: true
  },
  {
    width: 100,
    label: 'Рабочее место',
    dataKey: 'protein',
    numeric: true
  }
]

const rows: Data[] = Array.from({ length: 200 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)]
  return createData(index, ...randomSelection)
})

const VirtuosoTableComponents: TableComponents<Data> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer
      sx={{ borderBottom: 0 }}
      component={Paper}
      {...props}
      ref={ref}
    />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: 'separate', tableLayout: 'fixed', borderBottom: 0 }}
    />
  ),
  TableHead: (props) => <TableHead {...props} />,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} sx={{ borderBottom: 0 }} />
  ))
}

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? 'right' : 'left'}
          style={{ width: column.width }}
          sx={{
            backgroundColor: '#dfdfdf'
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  )
}

function rowContent(_index: number, row: Data) {
  return (
    <>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </>
  )
}

export default function ReactVirtualizedTable() {
  return (
    <Paper style={{ height: 600, width: '100%', borderBottom: 0 }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />

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
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </Paper>
  )
}
