import CustomTextField from '@components/TextField/CustomTextField';
import styles from './styles/controller.module.scss';
import { AdjustOutlined, SearchOutlined } from '@mui/icons-material';

function Location() {
  return (
    <div className={styles['controller__location']}>
      <div className={styles['controller__search-box']}>
        <AdjustOutlined
          fontSize="small"
          style={{ color: '#575EFF', width: '14px' }}
        />
        <h6>کجا هستید؟</h6>
        <SearchOutlined />
      </div>
      {/* <CustomTextField
        sx={{
          height: '100%',
          padding: '24px 24px 16px',
          border: 'none',
          '& .MuiInputBase-input': {
            backgroundColor: '#f8f9ff',
          },
        }}
      /> */}
    </div>
  );
}

export default Location;
