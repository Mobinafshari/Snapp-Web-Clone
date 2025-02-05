import CustomButton from '@components/Button/CustomButton';
import styles from './styles/controller.module.scss';
import Location from './Location';

function RideControll() {
  return (
    <div className={styles['controller']}>
      <Location />
      <div className={styles['controller__button']}>
        <CustomButton variant="contained" fullWidth>
          تایید مبدا
        </CustomButton>
      </div>
    </div>
  );
}

export default RideControll;
