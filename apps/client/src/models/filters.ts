import { createEvent, createStore } from 'effector'

import { ItemFilters } from '../constants/filters'

export const addPriceFilter = createEvent<ItemFilters>('add filter')
export const removePriceFilter = createEvent<ItemFilters>('remove filter')
export const resetPriceFilter =
  createEvent<Nullable<ItemFilters>>('reset filter')
export const $itemFilters = createStore<ItemFilters[]>([
  ItemFilters.DISCOUNT_60_PLUS,
])
  .on(resetPriceFilter, (_, filter) => (filter ? [filter] : []))
  .on(addPriceFilter, (store, filter) => [...store, filter])
  .on(removePriceFilter, (store, filter) =>
    store.filter((item) => item !== filter),
  )
