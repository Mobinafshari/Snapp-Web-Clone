import { getAddressApi } from '@services/home';
import { useMutation } from '@tanstack/react-query';
import { useLocationStore } from 'store/location.store';

const useGetAddress = () => {
  const target = useLocationStore((state) => state.target);
  const { lat, lng } = useLocationStore((state) => state.position);
  const { mutateAsync: fetchAddress } = useMutation({
    mutationFn: () => {
      if (target.lat === 0) {
        return getAddressApi({ lat, lng });
      }
      return Promise.resolve(null);
    },
    onSuccess(data) {
      if (data.features && data.features.length > 0) {
        setLocation(data.features[0].text_fa);
      } else {
        setLocation('معبر بدون نام');
      }
    },
  });
  const setLocation = useLocationStore((state) => state.setLocation);

  return {
    fetchAddress,
  };
};

export default useGetAddress;
