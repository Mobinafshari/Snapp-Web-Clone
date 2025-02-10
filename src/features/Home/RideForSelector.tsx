import Sheet from '@components/Sheet';
type Props = {
  openForm: boolean;
  onClose: () => void;
};
function RideForSelector({ onClose, openForm }: Props) {
  return (
    <Sheet open={openForm} onClose={onClose} height="30%">
      <Sheet.Header title="" onClose={onClose} />
      <Sheet.Body>hello</Sheet.Body>
    </Sheet>
  );
}

export default RideForSelector;
