import { Location } from 'react-router-dom'

import { createEvent, createStore } from 'effector'

import { BrandTypes } from '../constants/router'

export type Params = Partial<{
  brandType: BrandTypes
}>

export const setParams = createEvent<Params>('set url params')
export const $params = createStore<Params>({}).on(
  setParams,
  (_, params) => params,
)

export const setLocation = createEvent<Location>('set url params')
export const $location = createStore<Location>({
  hash: '',
  key: '',
  pathname: '',
  search: '',
  state: undefined,
}).on(setLocation, (_, params) => params)

// $location.watch((location) => {
//   console.log(`>> location: ${JSON.stringify(location, null, 4)}`)
// })
