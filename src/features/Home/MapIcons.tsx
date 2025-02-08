import { PersonOutline, KeyboardArrowDownOutlined } from '@mui/icons-material';
import { IconButton, Badge } from '@mui/material';
import styles from './styles/mapIcons.module.scss';
import RideForSelector from './RideForSelector';
import { useState } from 'react';
type FormTypes = {
  RideFor: boolean;
};

function MapIcons() {
  const [forms, setForm] = useState<FormTypes>({
    RideFor: false,
  });
  const toggleForm = (form: keyof FormTypes) => {
    setForm((prev) => ({ ...prev, [form]: !prev[form] }));
  };

  return (
    <>
      <div style={{ position: 'absolute', left: 0 }}>
        <IconButton
          className={styles['profile']}
          style={{ backgroundColor: 'white', width: '48px', height: '48px' }}
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
        برای خودم
        <KeyboardArrowDownOutlined color="primary" />
      </div>
      <RideForSelector
        openForm={forms.RideFor}
        onClose={() => toggleForm('RideFor')}
      />
    </>
  );
}

export default MapIcons;
