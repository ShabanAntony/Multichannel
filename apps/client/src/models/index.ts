import { matchPath } from 'react-router-dom'

import { sample } from 'effector'

import { ItemFilters } from '../constants/filters'
import { BrandTypes, Pages } from '../constants/router'
import { resetPriceFilter } from './filters'
import { $nikeRawItems, requestNikeItemsFx } from './items/nike'
import { $pinkRawItems, requestPinkItemsFx } from './items/pink'
import { $reebokRawItems, requestReebokItemsFx } from './items/reebok'
import { $vsRawItems, requestVSItemsFx } from './items/vs'
import { $location, $params, Params, setParams } from './router'

sample({
  source: $location,
  filter: (location) => {
    return !!matchPath(Pages.ITEMS, location.pathname)
  },
  fn: (location) => {
    return matchPath(Pages.ITEMS, location.pathname)!.params as Params
  },
  target: setParams,
})

sample({
  source: {
    params: $params,
    data: $vsRawItems,
    isLoading: requestVSItemsFx.pending,
  },
  filter: ({ params, data, isLoading }) => {
    return !isLoading && !data.length && params.brandType === BrandTypes.Classic
  },
  target: requestVSItemsFx,
})

sample({
  source: {
    params: $params,
    data: $pinkRawItems,
    isLoading: requestPinkItemsFx.pending,
  },
  filter: ({ params, data, isLoading }) => {
    return !isLoading && !data.length && params.brandType === BrandTypes.PINK
  },
  target: requestPinkItemsFx,
})

sample({
  source: {
    params: $params,
    data: $nikeRawItems,
    isLoading: requestNikeItemsFx.pending,
  },
  filter: ({ params, data, isLoading }) => {
    return !isLoading && !data.length && params.brandType === BrandTypes.NIKE
  },
  target: requestNikeItemsFx,
})

sample({
  source: {
    params: $params,
    data: $reebokRawItems,
    isLoading: requestReebokItemsFx.pending,
  },
  filter: ({ params, data, isLoading }) => {
    return !isLoading && !data.length && params.brandType === BrandTypes.REEBOK
  },
  target: requestReebokItemsFx,
})

sample({
  source: {
    params: $params,
  },
  filter: ({ params }) => {
    return params.brandType === BrandTypes.Classic
  },
  fn: () => ItemFilters.DISCOUNT_60_PLUS,
  target: resetPriceFilter,
})

sample({
  source: {
    params: $params,
  },
  filter: ({ params }) => {
    return params.brandType === BrandTypes.PINK
  },
  fn: () => ItemFilters.DISCOUNT_60_PLUS,
  target: resetPriceFilter,
})

sample({
  source: {
    params: $params,
  },
  filter: ({ params }) => {
    return (
      params.brandType === BrandTypes.NIKE ||
      params.brandType === BrandTypes.REEBOK
    )
  },
  fn: () => null,
  target: resetPriceFilter,
})
