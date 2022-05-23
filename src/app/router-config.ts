import { generatePath } from 'react-router-dom'

export function generateRoutePath<T extends keyof IRoutePathParams>(path: T, params: IRoutePathParams[T]) {
  return generatePath(path, params)
}

export enum RoutePath {
  ROOT = '/',
  RANKING = '/ranking',
  PLAYER = '/player/:uuid',
}

export interface IRoutePathParams {
  [RoutePath.ROOT]: {}
  [RoutePath.RANKING]: {}
  [RoutePath.PLAYER]: { uuid: string }
}