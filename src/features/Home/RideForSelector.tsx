import Sheet from '@components/Sheet';
import React from 'react';
type Props = {
  openForm: boolean;
  onClose: () => void;
};
function RideForSelector({ onClose, openForm }: Props) {
  return (
    <Sheet open={openForm} onClose={onClose}>
      RideForSelector
    </Sheet>
  );
}

export default RideForSelector;
