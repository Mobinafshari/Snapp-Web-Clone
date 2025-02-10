import Sheet from '@components/Sheet';
import styles from './styles/mapIcons.module.scss';
import { HorizontalRuleOutlined } from '@mui/icons-material';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { ChangeEvent } from 'react';
import { RideForType, useLocationStore } from 'store/location.store';

type Props = {
  openForm: boolean;
  onClose: () => void;
};

function RideForSelector({ onClose, openForm }: Props) {
  const { rideFor, toggleRideFor } = useLocationStore();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    toggleRideFor((event.target as HTMLInputElement).value as RideForType);
    onClose();
  };

  return (
    <Sheet open={openForm} onClose={onClose} height="33%">
      <Sheet.Body sx={{ padding: '0 24px' }}>
        <div className={styles['rideFor']}>
          <div className={styles['rideFor__icon']}>
            <HorizontalRuleOutlined
              sx={{
                height: 4,
                width: 24,
                backgroundColor: '#d3d3d3',
                borderRadius: '8px',
              }}
            />
          </div>
          <div className={styles['rideFor__select-box']}>
            <h2>درخواست برای</h2>
            <RadioGroup
              value={rideFor}
              onChange={handleChange}
              className={styles['rideFor__select']}
            >
              <FormControlLabel value="self" control={<Radio />} label="خودم" />
              <FormControlLabel
                value="others"
                control={<Radio />}
                label="دیگری"
              />
            </RadioGroup>
          </div>
        </div>
      </Sheet.Body>
    </Sheet>
  );
}

export default RideForSelector;
