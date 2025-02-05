import Sheet from '@components/Sheet';

type Props = {
  openForm: boolean;
  onClose: () => void;
};

function LocationSheet({ onClose, openForm }: Props) {
  return (
    <Sheet open={openForm} onClose={onClose} anchor="bottom">
      <Sheet.Header onClose={onClose} title="مبدا" />
    </Sheet>
  );
}

export default LocationSheet;
