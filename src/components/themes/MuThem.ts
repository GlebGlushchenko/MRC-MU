import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          // backgroundColor: 'red',
        },
      },
    },
  },
});