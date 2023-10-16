import { LocationRepository } from '../../data/repositories/LocationRepository';
import { axiosClient } from '../../services/http/AxiosHttpClient';
import { GetLocationByNameUseCase } from '../useCases/GetLocationByNameUseCase';

export const CreateGetLocationByNameUseCase = () => {
  const httpClient = axiosClient('/');
  const locationRepository = new LocationRepository(httpClient);

  return new GetLocationByNameUseCase(locationRepository);
};
