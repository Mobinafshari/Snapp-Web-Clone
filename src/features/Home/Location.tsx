import { useState } from 'react';
import LocationSheet from './LocationSheet';
import styles from './styles/controller.module.scss';
import {
  AdjustOutlined,
  KeyboardArrowUpOutlined,
  SearchOutlined,
} from '@mui/icons-material';
import { useLocationStore } from 'store/location.store';

function Location() {
  const [openSheet, setOpenSheet] = useState(false);
  const handleToggleForm = () => {
    setOpenSheet(!openSheet);
  };
  const location = useLocationStore((state) => state.location);
  return (
    <>
      <div className={styles['controller__up']}>
        <KeyboardArrowUpOutlined width={20} style={{ color: '#EBECF2' }} />
      </div>
      <div className={styles['controller__location']}>
        <div
          className={styles['controller__search-box']}
          onClick={handleToggleForm}
        >
          <AdjustOutlined
            fontSize="small"
            style={{ color: '#575EFF', width: '15px' }}
          />
          <h6>{location ? location : 'کجا هستید؟'}</h6>
          <SearchOutlined />
        </div>
      </div>
      <LocationSheet openForm={openSheet} onClose={handleToggleForm} />
    </>
  );
}

export default Location;
