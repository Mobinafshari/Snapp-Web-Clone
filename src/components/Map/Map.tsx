import { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import styles from './map.module.scss';
import useGetAddress from '@hooks/useGetAddress';
import { useSearchParams } from 'react-router';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const markerRef = useRef<maptilersdk.Marker | null>(null);
  const [markerPosition, setMarkerPosition] = useState({
    lng: 51.3371,
    lat: 35.6997,
  });
  const zoom = 15;
  const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;
  const { fetchAddress } = useGetAddress();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    maptilersdk.config.apiKey = API_KEY;
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.OPENSTREETMAP,
      center: [markerPosition.lng, markerPosition.lat],
      zoom: zoom,
    });

    markerRef.current = new maptilersdk.Marker({
      color: searchParams.has('from') ? 'green' : '#0077b6',
      draggable: true,
    })
      .setLngLat([markerPosition.lng, markerPosition.lat])
      .addTo(map.current);

    map.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      setMarkerPosition({ lng, lat });
      markerRef.current?.setLngLat([lng, lat]);
      await fetchAddress({ lng, lat });
    });

    return () => map.current?.remove();
  }, [API_KEY]);

  return (
    <div className={styles['map-wrap']}>
      <div ref={mapContainer} className={styles['map']} />
    </div>
  );
}
