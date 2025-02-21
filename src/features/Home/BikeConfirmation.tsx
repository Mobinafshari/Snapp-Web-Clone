import styles from './styles/CarConfirmation.module.scss';
import bikeImage from '@assets/images/bike (1).png';

function BikeConfirmation() {
  return (
    <div>
      <div className={`${styles['car']} ${styles['active']}`}>
        <div className={styles['car-details']}>
          <img
            src={bikeImage}
            alt="bike pic"
            className={styles['car__image']}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span>اسنپ بایک</span>
            <span style={{ fontSize: 12, color: '#686C79' }}>ویژه مسافر</span>
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

export default BikeConfirmation;
