import { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import styles from './map.module.scss';
import useGetAddress from '@hooks/useGetAddress';
import { useSearchParams } from 'react-router';
import { useLocationStore } from 'store/location.store';

const startDiv = document.createElement('div');
startDiv.innerText = 'مبدا';
startDiv.style.padding = '5px 10px';
startDiv.style.backgroundColor = '#575EFF';
startDiv.style.color = '#fff';
startDiv.style.borderRadius = '9999px';
startDiv.style.fontFamily = 'IRANSansMobile';
startDiv.style.fontSize = '16px';
startDiv.style.textAlign = 'center';
startDiv.style.cursor = 'pointer';

const targetDiv = document.createElement('div');
targetDiv.innerText = 'مقصد';
targetDiv.style.padding = '5px 10px';
targetDiv.style.backgroundColor = 'green';
targetDiv.style.color = '#fff';
targetDiv.style.borderRadius = '9999px';
targetDiv.style.fontFamily = 'IRANSansMobile';
targetDiv.style.fontSize = '16px';
targetDiv.style.textAlign = 'center';
targetDiv.style.cursor = 'pointer';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const markerRef = useRef<maptilersdk.Marker | null>(null);
  const targetMarkerRef = useRef<maptilersdk.Marker | null>(null);

  const [markerPosition, setMarkerPosition] = useState({
    lng: 51.3371,
    lat: 35.6997,
  });

  const zoom = 15;
  const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;
  const { fetchAddress } = useGetAddress();
  const [searchParams] = useSearchParams();
  const { start, changePosition, target } = useLocationStore();
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    maptilersdk.config.apiKey = API_KEY;
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.OPENSTREETMAP,
      center: [markerPosition.lng, markerPosition.lat],
      zoom: zoom,
      terrainControl: false,
      scaleControl: false,
      geolocateControl: false,
    });

    markerRef.current = new maptilersdk.Marker({
      color: '#0077b6',
      draggable: true,
    })
      .setLngLat([markerPosition.lng, markerPosition.lat])
      .addTo(map.current);

    return () => map.current?.remove();
  }, [API_KEY]);

  useEffect(() => {
    map?.current?.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      setMarkerPosition({ lng, lat });
      changePosition(lat, lng);
      markerRef.current?.setLngLat([lng, lat]);
      await fetchAddress({ lng, lat });
    });
    if (searchParams.get('from')) {
      new maptilersdk.Marker({ element: startDiv })
        .setLngLat([start.lng, start.lat])
        .addTo(map.current!);
      markerRef.current = new maptilersdk.Marker({
        color: 'green',
        draggable: true,
      })
        .setLngLat([markerPosition.lng + 0.001, markerPosition.lat])
        .addTo(map.current!);
    }
    if (searchParams.get('target')) {
      targetMarkerRef.current = new maptilersdk.Marker({ element: targetDiv })
        .setLngLat([markerPosition.lng, markerPosition.lat])
        .addTo(map.current!);
      markerRef.current?.remove();
    }
  }, [searchParams, start]);
  return (
    <div className={styles['map-wrap']}>
      <div ref={mapContainer} className={styles['map']} />
    </div>
  );
}
