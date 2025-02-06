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
        <CustomTextField placeholder="کجا هستید؟" />
      </Sheet.Body>
    </Sheet>
  );
}

export default LocationSheet;
