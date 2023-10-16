interface IGetLocationByNameParams {
  name: string;
}
export interface ILocationRepository {
  fetch(params: IGetLocationByNameParams): Promise<unknown>;
}
