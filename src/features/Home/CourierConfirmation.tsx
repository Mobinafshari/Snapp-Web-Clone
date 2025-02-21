import styles from './styles/CarConfirmation.module.scss';
import bikeImage from '@assets/images/box.png';

function CourierConfirmation() {
  return (
    <div>
      <div className={`${styles['car']} ${styles['active']}`}>
        <div className={styles['car-details']}>
          <img
            src={bikeImage}
            alt="bike courier pic"
            className={styles['car__image']}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span>اسنپ باکس</span>
            <span style={{ fontSize: 12, color: '#686C79' }}>ویژه مرسولات</span>
          </div>
        </div>
        <div className={styles['price']}>
          <span>32,000</span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
}
export default CourierConfirmation;
