import Map from '@components/Map/Map';
import RideControll from './RideControll';
import MapIcons from './MapIcons';

function Home() {
  return (
    <div style={{ position: 'relative' }}>
      <MapIcons />
      <Map />
      <RideControll />
    </div>
  );
}

export default Home;
