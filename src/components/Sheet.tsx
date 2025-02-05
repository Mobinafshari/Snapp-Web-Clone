import { Box, Drawer, IconButton, useMediaQuery } from '@mui/material';
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
  height?: CSSProperties['width'] | ResponsiveWidth;
};

export default function Sheet({
  open,
  anchor = 'right',
  children,
  rootElement,
  onClose,
  height = '96%',
}: SheetProps) {
  const isSmallScreen = useMediaQuery('(max-width:767px)');
  const drawerAnchor = isSmallScreen ? 'bottom' : anchor;
  return (
    <Drawer
      open={open}
      anchor={drawerAnchor}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: '100%',
          height: isSmallScreen ? '70%' : height,
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
        height: 64,
        minHeight: 64,
        boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.15)',
      }}
    >
      {children ?? (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            padding: '0 17px',
            gap: 12,
          }}
        >
          <IconButton onClick={onClose}>
            <CloseOutlined />
          </IconButton>
          <span
            style={{
              fontSize: 16,
              lineHeight: '26px',
              fontWeight: 400,
            }}
          >
            {title}
          </span>
        </div>
      )}
    </Box>
  );
};

Sheet.Body = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        overflow: 'auto',
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
      submitText: string;
      cancelText: string;
      onSubmit?: never;
      onCancel?: never;
    }
) & { loading?: boolean }) => {
  return (
    <Box
      sx={{
        height: 64,
        minHeight: 64,
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
