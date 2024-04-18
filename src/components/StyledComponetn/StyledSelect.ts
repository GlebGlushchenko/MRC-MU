import styled from "@emotion/styled";
import {Select } from "@mui/material";

interface StyledButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const StyledSelect = styled(Select)<StyledButtonProps>(({ backgroundColor, color }) => ({
  color: color || 'black',
  backgroundColor: backgroundColor || '#fff',
  minWidth: '400px'
}))