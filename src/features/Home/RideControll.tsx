import CustomButton from '@components/Button/CustomButton';
import styles from './styles/controller.module.scss';
import Location from './Location';
import { useSearchParams } from 'react-router';
import { useLocationStore } from 'store/location.store';
import toast from 'react-hot-toast';

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
          onClick={() => {
            if (location) {
              const currentParams = Object.fromEntries(searchParams.entries());

              if (searchParams.get('from')) {
                setSearchParams({ ...currentParams, target: location });
              } else {
                setSearchParams({ ...currentParams, from: location });
              }
            } else {
              toast.error('لطفا مکانی را انتخاب کنید');
            }
          }}
        >
          {searchParams.has('from') ? 'تایید مقصد' : 'تایید مبدا'}
        </CustomButton>
      </div>
    </div>
  );
}

export default RideControll;
