import { ReebokItemEntity, ReebokService } from '@server-api'
import { combine, createEffect, createStore } from 'effector'

import { ItemFilters } from '../../constants/filters'
import { ItemSorting } from '../../constants/sorting'
import { $itemFilters } from '../filters'
import { $itemSorting } from '../sorting'

export const requestReebokItemsFx = createEffect({
  name: 'request reebok items',
  handler: async () => {
    return ReebokService.findAll()
  },
})

export const $reebokRawItems = createStore<
  Array<ReebokItemEntity & { discount: number }>
>([]).on(requestReebokItemsFx.doneData, (_, data) =>
  data.map((item) => {
    const discount = ((item.price - item.salePrice) / item.price) * 100

    return { ...item, discount }
  }),
)

export const $reebokItems = combine(
  $itemFilters,
  $itemSorting,
  $reebokRawItems,
  (filters, sorting, items) => {
    const filteredItems = filters.length
      ? items.filter(({ price, salePrice }) => {
          const discount = ((price - salePrice) / price) * 100

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
        ? [...filteredItems].sort((a, b) => b.discount - a.discount)
        : sorting === ItemSorting.BY_MIN_PRICE
        ? [...filteredItems].sort((a, b) => a.salePrice - b.salePrice)
        : filteredItems

    // always show new items on top
    return sortedItems.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
  },
)

export const $reebokTotalItems = $reebokRawItems.map((items) => items.length)
export const $reebokFilteredItems = $reebokItems.map((items) => items.length)
export const $reebokNewItems = $reebokItems.map(
  (items) => items.filter(({ isNew }) => isNew).length,
)
