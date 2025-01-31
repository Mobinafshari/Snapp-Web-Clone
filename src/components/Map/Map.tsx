import { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const markerRef = useRef<maptilersdk.Marker | null>(null);

  const [markerPosition, setMarkerPosition] = useState({
    lng: 51.4215,
    lat: 35.6892,
  });
  const zoom = 14;
  const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    maptilersdk.config.apiKey = API_KEY;
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: [markerPosition.lng, markerPosition.lat],
      zoom: zoom,
    });

    markerRef.current = new maptilersdk.Marker({
      color: '#21aa58',
      draggable: true,
    })
      .setLngLat([markerPosition.lng, markerPosition.lat])
      .addTo(map.current);

    markerRef.current.on('dragend', () => {
      const newLngLat = markerRef.current?.getLngLat();
      if (newLngLat) {
        setMarkerPosition({ lng: newLngLat.lng, lat: newLngLat.lat });
      }
    });

    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat;
      setMarkerPosition({ lng, lat });
      markerRef.current?.setLngLat([lng, lat]);
    });

    return () => map.current?.remove();
  }, [API_KEY]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
      <p>
        📍 Marker Position: {markerPosition.lat.toFixed(4)},{' '}
        {markerPosition.lng.toFixed(4)}
      </p>
    </div>
  );
}
