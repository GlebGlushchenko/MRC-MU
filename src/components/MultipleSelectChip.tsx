import React from 'react'
import { Autocomplete, Chip, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export default function MultipleSelectChip() {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([])
  const [inputValue, setInputValue] = React.useState<string>('')

  const handleOnChange = (event: React.SyntheticEvent, value: string[]) => {
    setSelectedItems(value)
  }

  const handleDeleteItem = (item: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((selectedItem) => selectedItem !== item)
    )
  }

  return (
    <div>
      <Autocomplete
        sx={{ backgroundColor: 'white', width: '100%', marginBottom: 5 }}
        disablePortal
        multiple
        value={selectedItems}
        onChange={handleOnChange}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        options={[
          'Иван Иванович Иванов',
          'Александр Александрович Александров',
          'Гена Генадий Гена'
        ]}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ shrink: true }}
            placeholder={selectedItems.length > 0 ? '' : 'Выберите агента...'}
          />
        )}
        renderTags={(value: string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip
              sx={{
                backgroundColor: 'white',
                border: '1px solid rgba(0, 0, 0, 0.12)'
              }}
              key={index}
              label={option}
              {...getTagProps({ index })}
              onDelete={() => handleDeleteItem(option)}
              deleteIcon={<CloseIcon />}
            />
          ))
        }
      />
    </div>
  )
}
