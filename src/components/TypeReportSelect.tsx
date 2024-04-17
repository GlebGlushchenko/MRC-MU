import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { SelectChangeEvent } from '@mui/material/Select';

type propsType = {
  selectedItem: string,
  handleChange: (event: SelectChangeEvent<string>) => void
}

 const TypeReportSelect: React.FC<propsType> = ({selectedItem, handleChange}) => {

  return (
    <Box sx={{ marginBottom: '20px'}}>
          <Typography variant="subtitle1">Выберите тип отчёта:</Typography>
          <Select
            autoWidth={true}
            label="Тип отчёта"
            value={selectedItem}
            onChange={(event) => handleChange(event)}
            sx={{ backgroundColor: 'white',  maxWidth: '900px', width: '100%', }}
          >
             <MenuItem disabled value="Placeholder">
              <em style={{opacity: '0.2'}}>Выберите тип</em>
            </MenuItem>
            
            {['В реальном времени по агенту', 'В реальном времени по навыку'].map((value) => (
              <MenuItem  sx={{ maxWidth: '900px', width: '900px'}} key={value} value={value}>
                 {`Отчёт ${value}`}
                {selectedItem === value && <CheckIcon color="primary" sx={{ marginLeft: '20px'  }} />}
               
              </MenuItem>
            ))}
          </Select>
        </Box>
  );
}

export default TypeReportSelect