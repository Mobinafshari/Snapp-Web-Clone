import Sheet from '@components/Sheet';
import { useState } from 'react';
import { useLocationStore } from 'store/location.store';
import styles from './styles/rideConfirmation.module.scss';
import { Button } from '@mui/material';
import CustomIcon from '@assets/Icon';

const Tabs = [{ title: 'ماشین' }, { title: 'موتور' }, { title: 'پیک' }];

function RideConfirmation() {
  const target = useLocationStore((state) => state.target);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Sheet open={target.lat !== 0} onClose={() => {}} height="40%" hideBackdrop>
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
        </div>
      </Sheet.Body>
      <Sheet.Footer sx={{ height: 'auto' }}>
        <div>
          <div className={styles['line']}></div>
          <div className={styles['trip-options']}>
            <div className={styles['trip-option']}>
              <span>
                <CustomIcon icon="Options" svgProps={{ width: '24px' }} />
              </span>
              <span>گزینه های سفر</span>
            </div>
            <div className={styles['trip-option']}>
              <span>
                <CustomIcon icon="Code" svgProps={{ width: '24px' }} />
              </span>
              <span>کد تخفیف</span>
            </div>
          </div>
          <div className={styles['trip__button']}>
            <Button variant="contained" fullWidth sx={{ height: '48px' }}>
              Snapp call
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
