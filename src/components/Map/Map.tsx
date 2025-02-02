import { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import '@maptiler/sdk/dist/maptiler-sdk.css';
import './map.css';
import useGetAddress from '@hooks/useGetAddress';
import { useLocationStore } from 'store/location.store';

export default function Map() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const markerRef = useRef<maptilersdk.Marker | null>(null);
  const address = useLocationStore((state) => state.location);
  const [markerPosition, setMarkerPosition] = useState({
    lng: 51.3371,
    lat: 35.6997,
  });
  const zoom = 16;
  const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;
  const { fetchAddress } = useGetAddress();

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
      color: '#21aa58',
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
    <div className="map-wrap">
      {address && <p>📍 Address: {address}</p>}
      <div ref={mapContainer} className="map" />
    </div>
  );
}
