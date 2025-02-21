import Sheet from '@components/Sheet';
import { JSX, useState } from 'react';
import { useLocationStore } from 'store/location.store';
import styles from './styles/rideConfirmation.module.scss';
import { Button } from '@mui/material';
import CustomIcon from '@assets/Icon';
import CarConfirmation from './CarConfirmation';
import BikeConfirmation from './BikeConfirmation';
import CourierConfirmation from './CourierConfirmation';
import { AnimatePresence, motion } from 'framer-motion';

const Tabs: { title: string; content: JSX.Element; buttonText: string }[] = [
  {
    title: 'ماشین',
    content: <CarConfirmation />,
    buttonText: 'درخواست اسنپ',
  },
  {
    title: 'موتور',
    content: <BikeConfirmation />,
    buttonText: 'درخواست اسنپ بایک',
  },
  {
    title: 'پیک',
    content: <CourierConfirmation />,
    buttonText: 'وارد کردن جزییات',
  },
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
      <Sheet.Body sx={{ padding: '0' }}>
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              {Tabs[activeTab].content}
            </motion.div>
          </AnimatePresence>
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
              {Tabs[activeTab].buttonText}
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
