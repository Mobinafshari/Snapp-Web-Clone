import Sheet from '@components/Sheet';
import CustomTextField from '@components/TextField/CustomTextField';

type Props = {
  openForm: boolean;
  onClose: () => void;
};

function LocationSheet({ onClose, openForm }: Props) {
  return (
    <Sheet open={openForm} onClose={onClose} anchor="bottom">
      <Sheet.Header onClose={onClose} title="مبدا" />
      <Sheet.Body>
        <CustomTextField
          placeholder="کجا هستید؟"
          sx={{
            backgroundColor: '#ebecf2',
            color: '#252A3C',

            '& .MuiFilledInput-root': {
              borderBottom: 'none',
            },
            '& .MuiInputBase-input': {
              paddingTop: '12px',
              fontSize: '16px',
              color: 'black',
            },
            '& .MuiFilledInput-root::before': {
              display: 'none',
            },
          }}
          variant="filled"
        />
      </Sheet.Body>
    </Sheet>
  );
}

export default LocationSheet;
