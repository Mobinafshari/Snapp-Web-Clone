import { getAddressApi } from '@services/home';
import { useQuery } from '@tanstack/react-query';
type Props = {
  lat: number;
  lng: number;
};
const useGetAddress = (props: Props) => {
  const { lat, lng } = props;
  const { data: Address, isFetching: isGettingAddress } = useQuery({
    queryKey: [`address-${lat}-${lng}`],
    queryFn: () => getAddressApi(props),
  });
  return {
    Address,
    isGettingAddress,
  };
};

export default useGetAddress;
