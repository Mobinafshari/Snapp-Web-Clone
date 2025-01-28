import { Button } from '@mui/material';
import { ReactNode } from 'react';
import { ButtonProps } from '@mui/material';
type Props = ButtonProps & {
  children: ReactNode;
};

function CustomButton({ children, ...rest }: Props) {
  return (
    <Button {...rest} sx={{ padding: 0, minWidth: '48px' }}>
      {children}
    </Button>
  );
}

export default CustomButton;
