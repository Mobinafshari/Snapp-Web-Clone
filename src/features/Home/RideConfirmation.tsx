import Sheet from '@components/Sheet';
import { JSX, useState } from 'react';
import { useLocationStore } from 'store/location.store';
import styles from './styles/rideConfirmation.module.scss';
import { Button } from '@mui/material';
import CustomIcon from '@assets/Icon';
import ecoCarImage from '@assets/images/eco.png';
import ecoPlusImage from '@assets/images/eco-plus.png';

const Tabs: { title: string; content: JSX.Element }[] = [
  {
    title: 'ماشین',
    content: (
      <div className={styles['cars']}>
        <div className={styles['car']}>
          <div className={styles['car-details']}>
            <img
              src={ecoCarImage}
              alt="eco car"
              className={styles['car__image']}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span>اسنپ</span>
              <span style={{ fontSize: 12, color: '#686C79' }}>به صرفه</span>
            </div>
          </div>
          <div className={styles['price']}>
            <span>27,000</span>
            <span>تومان</span>
          </div>
        </div>
        <div className={styles['car']}>
          <div className={styles['car-details']}>
            <img
              src={ecoPlusImage}
              alt="eco plus car"
              className={styles['car__image']}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span>اسنپ اکوپلاس</span>
              <span style={{ fontSize: 12, color: '#686C79' }}>ویژه</span>
            </div>
          </div>
          <div className={styles['price']}>
            <span>52,000</span>
            <span>تومان</span>
          </div>
        </div>
      </div>
    ),
  },
  { title: 'موتور', content: <div></div> },
  { title: 'پیک', content: <div></div> },
];

function RideConfirmation() {
  const target = useLocationStore((state) => state.target);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Sheet
      open={target.lat !== 0}
      onClose={() => {}}
      height="auto"
      hideBackdrop
    >
      <Sheet.Body sx={{ padding: '12px' }}>
        <div>
          <div className={styles['tabs']}>
            {Tabs.map((tab, index) => (
              <Tab
                title={tab.title}
                key={index}
                selected={index === activeTab}
                handleSelect={() => setActiveTab(index)}
              />
            ))}
          </div>
          {Tabs[activeTab].content}
        </div>
      </Sheet.Body>
      <Sheet.Footer sx={{ height: 'auto' }}>
        <div>
          <div className={styles['line']}></div>
          <div className={styles['trip-options']}>
            <div className={styles['trip-option']}>
              <CustomIcon icon="Options" svgProps={{ width: '24px' }} />
              <span>گزینه های سفر</span>
            </div>
            <div className={styles['trip-option']}>
              <CustomIcon icon="Code" svgProps={{ width: '24px' }} />
              <span>کد تخفیف</span>
            </div>
          </div>
          <div className={styles['trip__button']}>
            <Button variant="contained" fullWidth>
              درخواست اسنپ
            </Button>
          </div>
        </div>
      </Sheet.Footer>
    </Sheet>
  );
}

const Tab = ({
  title,
  selected,
  handleSelect,
}: {
  title: string;
  selected: boolean;
  handleSelect: () => void;
}) => {
  return (
    <div
      className={`${styles['tab']} ${selected ? styles['active'] : ''}`}
      onClick={handleSelect}
    >
      {title}
    </div>
  );
};

export default RideConfirmation;
