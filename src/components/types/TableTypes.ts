// export interface Data {
//   calories: number
//   carbs: number
//   skills: string
//   fat: number
//   id: number
//   protein: number
// }

// export interface ColumnData {
//   dataKey: keyof Data
//   label: string
//   numeric?: boolean
//   width: number
// }

// export type Sample = [string, number, number, number, number]

export interface TableData {
  [key: string]: string | number
}