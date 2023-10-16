import qs from 'qs';

export const serializer = (params: unknown): string =>
  qs.stringify(params, { arrayFormat: 'indices', allowDots: true });
