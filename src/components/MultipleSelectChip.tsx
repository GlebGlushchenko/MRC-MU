import React from 'react'
import { Autocomplete, Chip, TextField, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

type MultipleSelectChipProps = {
  placeholder?: string
  selectItems: string[]
  subtitle: string
}

const MultipleSelectChip: React.FC<MultipleSelectChipProps> = ({
  placeholder = 'Заглушка...',
  selectItems,
  subtitle
}) => {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([])
  const [inputValue, setInputValue] = React.useState<string>('')

  const handleOnChange = (_event: React.SyntheticEvent, value: string[]) => {
    setSelectedItems(value)
  }

  const handleDeleteItem = (item: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((selectedItem) => selectedItem !== item)
    )
  }

  return (
    <div>
      <Typography variant="subtitle1">{subtitle}</Typography>
      <Autocomplete
        sx={{ backgroundColor: 'white', width: '100%', marginBottom: 5 }}
        disablePortal
        multiple
        value={selectedItems}
        onChange={(event, value) => handleOnChange(event, value)}
        inputValue={inputValue}
        onInputChange={(_event, newInputValue) => {
          setInputValue(newInputValue)
        }}
        options={selectItems}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ shrink: true }}
            placeholder={selectedItems.length > 0 ? '' : placeholder}
          />
        )}
        renderTags={(value: string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip
              sx={{
                backgroundColor: 'white',
                border: '1px solid rgba(0, 0, 0, 0.12)'
              }}
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

export default MultipleSelectChip
