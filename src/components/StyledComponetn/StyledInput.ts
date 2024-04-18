import styled from "@emotion/styled";
import {TextField } from "@mui/material";

interface StyledButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const StyledInput = styled(TextField)<StyledButtonProps>(({ backgroundColor, color }) => ({
  color: color || 'black',
  backgroundColor: backgroundColor || '#fff',
  minWidth: '400px'
}))