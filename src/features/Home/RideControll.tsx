import CustomButton from '@components/Button/CustomButton';
import styles from './styles/controller.module.scss';
import Location from './Location';
import { useSearchParams } from 'react-router';
import { useLocationStore } from 'store/location.store';
import toast from 'react-hot-toast';
import RideConfirmation from './RideConfirmation';

function RideControll() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { location, position, setStart, setTarget, target } =
    useLocationStore();
  return (
    <>
      <div
        className={styles['controller']}
        style={{ display: target.lat !== 0 ? 'none' : '' }}
      >
        <Location />
        <div className={styles['controller__button']}>
          <CustomButton
            variant="contained"
            fullWidth
            onClick={() => {
              if (location) {
                const currentParams = Object.fromEntries(
                  searchParams.entries()
                );

                if (searchParams.get('from')) {
                  setTarget(position.lat, position.lng);
                  setSearchParams({ ...currentParams, target: location });
                } else {
                  setStart(position.lat, position.lng);
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
      <RideConfirmation />
    </>
  );
}

export default RideControll;
