import { PersonOutline } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import styles from './styles/mapIcons.module.scss';

function MapIcons() {
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      <IconButton className={styles['profile']}>
        <PersonOutline />
      </IconButton>
    </div>
  );
}

export default MapIcons;
