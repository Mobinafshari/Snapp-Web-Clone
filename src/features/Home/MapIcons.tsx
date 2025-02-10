import { PersonOutline, KeyboardArrowDownOutlined } from '@mui/icons-material';
import { IconButton, Badge } from '@mui/material';
import styles from './styles/mapIcons.module.scss';
import RideForSelector from './RideForSelector';
import { useState } from 'react';
import { useLocationStore } from 'store/location.store';
import ProfileSheet from './ProfileSheet';
type FormTypes = {
  RideFor: boolean;
  Profile: boolean;
};

function MapIcons() {
  const [forms, setForm] = useState<FormTypes>({
    RideFor: false,
    Profile: false,
  });
  const toggleForm = (form: keyof FormTypes) => {
    setForm((prev) => ({ ...prev, [form]: !prev[form] }));
  };
  const rideForValue = useLocationStore((state) => state.rideFor);
  const rideFor = {
    self: 'برای خودم',
    others: 'برای دیگری',
  };
  return (
    <>
      <div style={{ position: 'absolute', left: 0 }}>
        <IconButton
          className={styles['profile']}
          style={{ backgroundColor: 'white', width: '48px', height: '48px' }}
          onClick={() => toggleForm('Profile')}
        >
          <Badge
            badgeContent={1}
            color="error"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '& .MuiBadge-badge': {
                minWidth: '13px',
                height: '15px',
                fontSize: '0.5rem',
                right: '30px',
                top: '-4px',
              },
            }}
          >
            <PersonOutline />
          </Badge>
        </IconButton>
      </div>
      <div
        className={styles['profile__dropdown']}
        onClick={() => toggleForm('RideFor')}
      >
        {rideFor[rideForValue]}
        <KeyboardArrowDownOutlined color="primary" />
      </div>
      <RideForSelector
        openForm={forms.RideFor}
        onClose={() => toggleForm('RideFor')}
      />
      <ProfileSheet
        openForm={forms.Profile}
        onClose={() => toggleForm('Profile')}
      />
    </>
  );
}

export default MapIcons;
