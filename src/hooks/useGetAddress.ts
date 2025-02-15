import { getAddressApi } from '@services/home';
import { useMutation } from '@tanstack/react-query';
import { useLocationStore } from 'store/location.store';

const useGetAddress = () => {
  const { lat } = useLocationStore((state) => state.target);
  const { mutateAsync: fetchAddress } = useMutation({
    mutationFn: getAddressApi,
    onSuccess(data) {
      if (data.features && data.features.length > 0) {
        if (lat !== 0) return;
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
