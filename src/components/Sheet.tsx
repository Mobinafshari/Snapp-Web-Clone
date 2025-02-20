import {
  Box,
  Drawer,
  DrawerProps,
  IconButton,
  SxProps,
  Theme,
} from '@mui/material';
import { CSSProperties, ReactNode } from 'react';
import { Check, Close, CloseOutlined } from '@mui/icons-material';
import CustomButton from './Button/CustomButton';

type ResponsiveWidth = {
  xs?: number | string;
  sm?: number | string;
  md?: number | string;
  lg?: number | string;
  xl?: number | string;
};
type SheetProps = {
  open: boolean;
  anchor?: 'bottom' | 'top' | 'left' | 'right';
  children: ReactNode;
  rootElement?: (props: { children: ReactNode }) => ReactNode;
  onClose?: () => void;
  width?: CSSProperties['width'] | ResponsiveWidth;
  height?: CSSProperties['height'] | ResponsiveWidth;
  hideBackdrop?: boolean;
} & DrawerProps;

export default function Sheet({
  open,
  anchor = 'bottom',
  children,
  rootElement,
  onClose,
  height = '96%',
  hideBackdrop = false,
  ...rest
}: SheetProps) {
  return (
    <Drawer
      disableEnforceFocus
      hideBackdrop={hideBackdrop}
      {...rest}
      open={open}
      anchor={anchor}
      onClose={onClose}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          height: height,
          maxHeight: '100vh',
          margin: '0 auto',
          borderTopRightRadius: '12px',
          borderTopLeftRadius: '12px',
        },
        zIndex: 999999,
      }}
    >
      {rootElement ? (
        rootElement({ children })
      ) : (
        <Box
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {children}
        </Box>
      )}
    </Drawer>
  );
}

Sheet.Header = ({
  title,
  onClose,
  children,
}:
  | { title: string; onClose: () => void; children?: never }
  | { title?: never; onClose?: never; children: ReactNode }) => {
  return (
    <Box
      sx={{
        height: 56,
        minHeight: 56,
        // boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.15)',
      }}
    >
      {children ?? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'center',
            padding: '0 17px',
            gap: 12,
            color: '#252A3C',
          }}
        >
          <IconButton onClick={onClose} style={{ color: 'black' }}>
            <CloseOutlined />
          </IconButton>
          <h6
            style={{
              fontSize: 20,
              lineHeight: '26px',
              fontWeight: 500,
              flexBasis: '90%',
              textAlign: 'center',
            }}
          >
            {title}
          </h6>
        </div>
      )}
    </Box>
  );
};

Sheet.Body = ({
  children,
  sx,
}: {
  children: ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        overflow: 'auto',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

Sheet.Footer = ({
  children,
  onSubmit,
  onCancel,
  loading = false,
  submitText,
  cancelText,
  sx,
}: (
  | {
      children?: never;
      submitText: string;
      cancelText: string;
      onSubmit?: () => void;
      onCancel?: () => void;
    }
  | {
      children: ReactNode;
      submitText?: string;
      cancelText?: string;
      onSubmit?: never;
      onCancel?: never;
    }
) & { loading?: boolean; sx?: SxProps<Theme> }) => {
  return (
    <Box
      sx={{
        height: 64,
        minHeight: 64,
        ...sx,
      }}
    >
      {children ?? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'stretch',
            alignItems: 'center',
            height: '100%',
            padding: '15px 18px',
            gap: 12,
          }}
        >
          <CustomButton
            startIcon={<Check />}
            variant="contained"
            color="primary"
            sx={{ flexGrow: 1, borderRadius: '8px', fontSize: 16 }}
            type="submit"
            onClick={onSubmit}
            loading={loading}
          >
            <span style={{ fontSize: '16px', marginInlineEnd: 6 }}>
              {submitText}
            </span>
          </CustomButton>
          <CustomButton
            startIcon={<Close />}
            variant="outlined"
            color="primary"
            sx={{ flexGrow: 1, borderRadius: '8px', fontSize: 16 }}
            onClick={onCancel}
          >
            <span style={{ fontSize: '16px', marginInlineEnd: 6 }}>
              {cancelText}
            </span>
          </CustomButton>
        </div>
      )}
    </Box>
  );
};
