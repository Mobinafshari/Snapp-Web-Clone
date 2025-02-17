import Sheet from '@components/Sheet';
import { useState } from 'react';
import { useLocationStore } from 'store/location.store';
import styles from './styles/rideConfirmation.module.scss';

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
