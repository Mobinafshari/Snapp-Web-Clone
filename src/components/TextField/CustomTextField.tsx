import { Theme } from '@emotion/react';
import { InputAdornment, SxProps, TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material';
import { ReactNode } from 'react';

type Props = TextFieldProps & {
  sx?: SxProps<Theme> | undefined;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

function CustomTextField({ sx, startIcon, endIcon, ...rest }: Props) {
  return (
    <TextField
      {...rest}
      sx={{
        borderRadius: '8px',
        backgroundColor: '#ebecf2',
        color: '#252A3C',
        '& .MuiInputBase-root': {
          height: '47px',
        },
        '& .MuiFormHelperText-root': {
          marginInlineStart: 0,
        },
        '& .MuiInputLabel-root': {
          fontSize: 14,
          top: -2,
          fontFamily: 'IRANSansMobile',
        },
        '& .MuiInputLabel-root.MuiInputLabel-shrink': {
          top: 0,
        },
        '& .MuiInputBase-input, & .MuiOutlinedInput-notchedOutline': {
          fontSize: 16,
          paddingTop: '12px',
          paddingInlineStart: '8px',
          color: 'black',
        },
        '& .MuiFilledInput-root::before': {
          display: 'none',
        },
        '& .MuiFilledInput-root': {
          borderBottom: 'none',
        },
        ...sx,
      }}
      fullWidth
      variant="filled"
      slotProps={{
        input: {
          startAdornment: startIcon ? (
            <InputAdornment position="start" style={{ margin: 'auto' }}>
              {startIcon}
            </InputAdornment>
          ) : null,
          endAdornment: endIcon ? (
            <InputAdornment position="end" style={{ margin: 'auto' }}>
              {endIcon}
            </InputAdornment>
          ) : null,
        },
      }}
    />
  );
}

export default CustomTextField;
