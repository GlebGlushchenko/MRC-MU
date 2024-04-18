import styled from "@emotion/styled";
import { Button } from "@mui/material";

interface StyledButtonProps {
  backgroundColor?: string;
  color?: string;
}

export const StyledButton = styled(Button)<StyledButtonProps>(({ backgroundColor, color }) => ({
  color: color || 'black',
  border: '1px solid rgba(0, 0, 0, 0.5)',
  textTransform: 'none',
  backgroundColor: backgroundColor || '#fff',
  padding: 5,
  minWidth: 0,
}))