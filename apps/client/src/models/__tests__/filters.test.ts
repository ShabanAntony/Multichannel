import { allSettled, fork } from 'effector'

import { ItemFilters } from '../../constants/filters'
import { $itemFilters, addPriceFilter, removePriceFilter } from '../filters'

describe('$itemFilters', () => {
  it('should add price filter', async () => {
    const scope = fork()

    expect(scope.getState($itemFilters)).toEqual([ItemFilters.DISCOUNT_60_PLUS])

    await allSettled(addPriceFilter, {
      scope,
      params: ItemFilters.DISCOUNT_50_60,
    })
    expect(scope.getState($itemFilters)).toEqual([
      ItemFilters.DISCOUNT_60_PLUS,
      ItemFilters.DISCOUNT_50_60,
    ])
  })

  it('should remove price filter', async () => {
    const scope = fork()

    expect(scope.getState($itemFilters)).toEqual([ItemFilters.DISCOUNT_60_PLUS])

    await allSettled(removePriceFilter, {
      scope,
      params: ItemFilters.DISCOUNT_60_PLUS,
    })
    expect(scope.getState($itemFilters)).toEqual([])
  })
})
