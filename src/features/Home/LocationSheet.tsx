import Sheet from '@components/Sheet';
import CustomTextField from '@components/TextField/CustomTextField';
import { AdjustOutlined, SearchOutlined } from '@mui/icons-material';

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
          startIcon={
            <AdjustOutlined
              fontSize="small"
              style={{ color: '#575EFF', width: '15px' }}
            />
          }
          endIcon={<SearchOutlined />}
        />
      </Sheet.Body>
    </Sheet>
  );
}

export default LocationSheet;
