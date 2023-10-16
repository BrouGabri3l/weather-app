import { ILocationRepository } from '../../domain/repositories/ILocationRepository';

interface IGetLocationByNameUseCaseParams {
  name: string;
}

export class GetLocationByNameUseCase {
  constructor(private readonly locationRepository: ILocationRepository) {}

  async execute(params: IGetLocationByNameUseCaseParams): Promise<unknown> {
    return this.locationRepository.fetch(params);
  }
}
