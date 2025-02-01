import http from '@lib/http';
import { getAddressProps } from './types/home';
const API_KEY = import.meta.env.VITE_MAPTILER_API_KEY;

export const getAddressApi = (props: getAddressProps) => {
  const { lat, lng } = props;
  return http
    .get(`https://api.maptiler.com/geocoding/${lng},${lat}.json?key=${API_KEY}`)
    .then((data) => data.data);
};
