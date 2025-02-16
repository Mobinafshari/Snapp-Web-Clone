import Sheet from '@components/Sheet';
import { useLocationStore } from 'store/location.store';

function RideConfirmation() {
  const target = useLocationStore((state) => state.target);
  return (
    <Sheet open={target.lat !== 0} onClose={() => {}} height="40%" hideBackdrop>
      <Sheet.Body>
        <div></div>
      </Sheet.Body>
    </Sheet>
  );
}

export default RideConfirmation;
