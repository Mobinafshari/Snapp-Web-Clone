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
  const [address, setAddress] = useState<string | null>(null);
  const zoom = 14;
  const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

  const fetchAddress = async (lng: number, lat: number) => {
    try {
      const response = await fetch(
        `https://api.maptiler.com/geocoding/${lng},${lat}.json?key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
      if (data.features && data.features.length > 0) {
        setAddress(data.features[0].place_name_fa);
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Error fetching address');
    }
  };

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

    map.current.on('click', async (e) => {
      const { lng, lat } = e.lngLat;
      setMarkerPosition({ lng, lat });
      markerRef.current?.setLngLat([lng, lat]);
      await fetchAddress(lng, lat);
    });

    return () => map.current?.remove();
  }, [API_KEY]);
  console.log(address);
  return (
    <div className="map-wrap">
      {address && <p>📍 Address: {address}</p>}
      <div ref={mapContainer} className="map" />
    </div>
  );
}
