import Sheet from '@components/Sheet';

type Props = {
  openForm: boolean;
  onClose: () => void;
};

function ProfileSheet({ onClose, openForm }: Props) {
  return (
    <Sheet open={openForm} onClose={onClose} height="100%">
      <Sheet.Header onClose={onClose} title="" />
      <Sheet.Body>
        <div style={{ textAlign: 'center' }}>Hello There</div>
      </Sheet.Body>
    </Sheet>
  );
}

export default ProfileSheet;
