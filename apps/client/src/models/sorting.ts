import { SaleItemEntity } from '@server-api'
import { createEvent, createStore } from 'effector'

import { ItemSorting } from '../constants/sorting'

export const setSorting = createEvent<ItemSorting>('set sorting')
export const $itemSorting = createStore<ItemSorting>(
  ItemSorting.BY_MAX_DISCOUNT,
).on(setSorting, (_, sorting) => sorting)

export const sortByMaxDiscount = (
  a: { discount: number },
  b: { discount: number },
) => b.discount - a.discount

export const sortVSItemsByMinPrice = (a: SaleItemEntity, b: SaleItemEntity) =>
  a.parsedDiscount - b.parsedDiscount
