import { useState } from 'react';
import LocationSheet from './LocationSheet';
import styles from './styles/controller.module.scss';
import { AdjustOutlined, SearchOutlined } from '@mui/icons-material';

function Location() {
  const [openSheet, setOpenSheet] = useState(false);
  const handleToggleForm = () => {
    setOpenSheet(!openSheet);
  };
  return (
    <>
      <div className={styles['controller__location']}>
        <div
          className={styles['controller__search-box']}
          onClick={handleToggleForm}
        >
          <AdjustOutlined
            fontSize="small"
            style={{ color: '#575EFF', width: '15px' }}
          />
          <h6>کجا هستید؟</h6>
          <SearchOutlined />
        </div>
      </div>
      <LocationSheet openForm={openSheet} onClose={handleToggleForm} />
    </>
  );
}

export default Location;
