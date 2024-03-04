import { PinkService, SaleItemEntity } from '@server-api'
import { combine, createEffect, createStore } from 'effector'

import { ItemFilters } from '../../constants/filters'
import { ItemSorting } from '../../constants/sorting'
import { $itemFilters } from '../filters'
import {
  $itemSorting,
  sortByMaxDiscount,
  sortVSItemsByMinPrice,
} from '../sorting'

export const requestPinkItemsFx = createEffect({
  name: 'request items',
  handler: async () => {
    return PinkService.findAll()
  },
})

export const $pinkRawItems = createStore<SaleItemEntity[]>([]).on(
  requestPinkItemsFx.doneData,
  (_, data) => data,
)

export const $pinkItems = combine(
  $itemFilters,
  $itemSorting,
  $pinkRawItems,
  (filters, sorting, items) => {
    const filteredItems = filters.length
      ? items.filter(({ discount }) => {
          return (
            (filters.includes(ItemFilters.DISCOUNT_50_60) &&
              discount >= 50 &&
              discount <= 60) ||
            (filters.includes(ItemFilters.DISCOUNT_60_PLUS) && discount > 60)
          )
        })
      : items

    const sortedItems =
      sorting === ItemSorting.BY_MAX_DISCOUNT
        ? [...filteredItems].sort(sortByMaxDiscount)
        : sorting === ItemSorting.BY_MIN_PRICE
        ? [...filteredItems].sort(sortVSItemsByMinPrice)
        : filteredItems

    // always show new items on top
    return sortedItems.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
  },
)

export const $pinkTotalItems = $pinkRawItems.map((items) => items.length)
export const $pinkFilteredItems = $pinkItems.map((items) => items.length)
export const $pinkNewItems = $pinkItems.map(
  (items) => items.filter(({ isNew }) => isNew).length,
)
