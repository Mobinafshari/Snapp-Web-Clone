import { useRef, useEffect } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);

  const tehran = { lng: 51.4215, lat: 35.6892 };
  const zoom = 14;

  const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

  useEffect(() => {
    if (map.current || !mapContainer.current) return;
    maptilersdk.config.apiKey = API_KEY;
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [tehran.lng, tehran.lat],
      zoom: zoom,
    });
  }, [tehran.lng, tehran.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
