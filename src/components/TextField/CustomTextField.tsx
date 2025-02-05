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
          fontSize: 14,
        },
        '& .MuiInputBase-input': {
          fontFamily: 'IRANSans_Light, Roboto',
        },
        ...sx,
      }}
      fullWidth
    />
  );
}

export default CustomTextField;
