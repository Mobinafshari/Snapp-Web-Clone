import { Theme } from '@emotion/react';
import { SxProps, TextField } from '@mui/material';
import { TextFieldProps } from '@mui/material';
type Props = TextFieldProps & {
  sx?: SxProps<Theme> | undefined;
};

function CustomTextField({ sx, ...rest }: Props) {
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
    />
  );
}

export default CustomTextField;
