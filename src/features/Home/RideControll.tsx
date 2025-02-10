import CustomButton from '@components/Button/CustomButton';
import styles from './styles/controller.module.scss';
import Location from './Location';
import { useSearchParams } from 'react-router';
import { useLocationStore } from 'store/location.store';

function RideControll() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocationStore((state) => state.location);
  return (
    <div className={styles['controller']}>
      <Location />
      <div className={styles['controller__button']}>
        <CustomButton
          variant="contained"
          fullWidth
          onClick={() => setSearchParams({ from: location })}
        >
          {searchParams.has('from') ? 'تایید مقصد' : 'تایید مبدا'}
        </CustomButton>
      </div>
    </div>
  );
}

export default RideControll;
