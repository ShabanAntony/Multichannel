import { NikeItemEntity, NikeService } from '@server-api'
import { combine, createEffect, createStore } from 'effector'

import { ItemFilters } from '../../constants/filters'
import { ItemSorting } from '../../constants/sorting'
import { $itemFilters } from '../filters'
import { $itemSorting } from '../sorting'

export const requestNikeItemsFx = createEffect({
  name: 'request nike items',
  handler: async () => {
    return NikeService.findAll()
  },
})

export const $nikeRawItems = createStore<
  Array<NikeItemEntity & { discount: number }>
>([]).on(requestNikeItemsFx.doneData, (_, data) =>
  data.map((item) => {
    const discount = ((item.price - item.salePrice) / item.price) * 100

    return { ...item, discount }
  }),
)

export const $nikeItems = combine(
  $itemFilters,
  $itemSorting,
  $nikeRawItems,
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

export const $nikeTotalItems = $nikeRawItems.map((items) => items.length)
export const $nikeFilteredItems = $nikeItems.map((items) => items.length)
export const $nikeNewItems = $nikeItems.map(
  (items) => items.filter(({ isNew }) => isNew).length,
)
