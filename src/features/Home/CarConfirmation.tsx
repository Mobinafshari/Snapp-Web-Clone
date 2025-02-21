import ecoCarImage from '@assets/images/eco.png';
import ecoPlusImage from '@assets/images/eco-plus.png';
import styles from './styles/CarConfirmation.module.scss';
import { useState } from 'react';

const carOptions = [
  {
    id: 1,
    image: ecoCarImage,
    name: 'اسنپ',
    description: 'به صرفه',
    price: '27,000',
  },
  {
    id: 2,
    image: ecoPlusImage,
    name: 'اسنپ اکوپلاس',
    description: 'ویژه',
    price: '52,000',
  },
];

function CarConfirmation() {
  const [active, setActive] = useState(carOptions[0].id);

  return (
    <div>
      {carOptions.map((car) => (
        <div
          key={car.id}
          className={`${styles['car']} ${active === car.id ? styles['active'] : ''}`}
          onClick={() => setActive(car.id)}
        >
          <div className={styles['car-details']}>
            <img
              src={car.image}
              alt={car.name}
              className={styles['car__image']}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span>{car.name}</span>
              <span style={{ fontSize: 12, color: '#686C79' }}>
                {car.description}
              </span>
            </div>
          </div>
          <div className={styles['price']}>
            <span>{car.price}</span>
            <span>تومان</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CarConfirmation;
