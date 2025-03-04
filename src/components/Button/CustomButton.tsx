import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';
type Props = ButtonProps & {
  children: ReactNode;
  isDisabled?: boolean;
  variant?: 'text' | 'outlined' | 'contained';
};

function CustomButton({
  children,
  isDisabled = false,
  variant = 'contained',
  ...rest
}: Props) {
  return (
    <Button
      variant={variant}
      {...rest}
      sx={{
        padding: 0,
        minWidth: '40px',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
      disabled={isDisabled}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
