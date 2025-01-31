import { useEffect, useRef } from 'react';
import Map from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Home() {
  const mapContainerRef = useRef(null);

  return (
    <div>
      <h1>اسنپ</h1>
      <Map
        mapboxAccessToken="<Mapbox access token>"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default Home;
