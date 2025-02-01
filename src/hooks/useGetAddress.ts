import { getAddressApi } from '@services/home';
import { useQuery } from '@tanstack/react-query';
import { useLocationStore } from 'store/location.store';
import { useState, useEffect } from 'react';
type Props = {
  lat: number;
  lng: number;
};
const useGetAddress = (props: Props) => {
  const setLocation = useLocationStore((state) => state.setLocation);
  const [coordinates, setCoordinates] = useState({
    lat: props.lat,
    lng: props.lng,
  });

  const { data: Address, refetch } = useQuery({
    queryKey: [`address-${coordinates.lat}-${coordinates.lng}`],
    queryFn: () => getAddressApi(coordinates),
  });
  useEffect(() => {
    if (Address) {
      let location;
      if (Address.features && Address.features.length > 0) {
        location = Address.features[0].text_fa;
      } else {
        location = 'معبر بدون نام';
      }
      setLocation(location);
    }
  }, [Address, setLocation]);

  const fetchAddress = (lng: number, lat: number) => {
    setCoordinates({ lng, lat });
    refetch();
  };

  return {
    fetchAddress,
  };
};

export default useGetAddress;
