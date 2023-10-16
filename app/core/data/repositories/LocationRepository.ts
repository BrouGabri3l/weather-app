import { AxiosInstance } from 'axios';
import { ILocationRepository } from '../../domain/repositories/ILocationRepository';

interface IGetLocationByNameParams {
  name: string;
}
export class LocationRepository implements ILocationRepository {
  constructor(private readonly httpClient: AxiosInstance) {}

  async fetch(params: IGetLocationByNameParams): Promise<unknown> {
    console.log(params);
    return undefined;
  }
}
