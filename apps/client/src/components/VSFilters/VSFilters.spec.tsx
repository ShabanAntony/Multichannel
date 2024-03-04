import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import { fork } from 'effector'
import { Provider } from 'effector-react'

import { ItemFilters } from '../../constants/filters'
import { ItemSorting } from '../../constants/sorting'
import {
  $itemFilters,
  addPriceFilter,
  removePriceFilter,
} from '../../models/filters'
import { $itemSorting, setSorting } from '../../models/sorting'
import { VSFilters } from './VSFilters'

const addPriceFilterMocked = jest.fn()

addPriceFilter.watch(addPriceFilterMocked)

const removePriceFilterMocked = jest.fn()

removePriceFilter.watch(removePriceFilterMocked)

const sortItemsMocked = jest.fn()

setSorting.watch(sortItemsMocked)

describe('VSFilters', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render with sorting by max discount', () => {
    const scope = fork({
      values: [
        [$itemFilters, []],
        [$itemSorting, ItemSorting.BY_MAX_DISCOUNT],
      ],
    })
    const { baseElement } = render(
      <Provider value={scope}>
        <VSFilters />
      </Provider>,
    )

    expect(baseElement).toBeTruthy()
  })

  it('should render with sorting by min price', () => {
    const scope = fork({
      values: [
        [$itemFilters, []],
        [$itemSorting, ItemSorting.BY_MIN_PRICE],
      ],
    })
    const { baseElement } = render(
      <Provider value={scope}>
        <VSFilters />
      </Provider>,
    )

    expect(baseElement).toBeTruthy()
  })

  it('should handle add price filter', () => {
    const scope = fork({
      values: [
        [$itemFilters, []],
        [$itemSorting, ItemSorting.BY_MAX_DISCOUNT],
      ],
    })
    const { getByTestId } = render(
      <Provider value={scope}>
        <VSFilters />
      </Provider>,
    )

    const checkbox = getByTestId('price-filter-discount_50_60')

    fireEvent.click(checkbox)

    expect(addPriceFilterMocked).toHaveBeenCalledWith(
      ItemFilters.DISCOUNT_50_60,
    )
    expect(removePriceFilterMocked).not.toHaveBeenCalled()
  })

  it('should handle remove price filter', () => {
    const scope = fork({
      values: [
        [
          $itemFilters,
          [ItemFilters.DISCOUNT_60_PLUS, ItemFilters.DISCOUNT_50_60],
        ],
      ],
    })
    const { getByTestId } = render(
      <Provider value={scope}>
        <VSFilters />
      </Provider>,
    )

    const checkbox = getByTestId('price-filter-discount_50_60')

    fireEvent.click(checkbox)

    expect(removePriceFilterMocked).toHaveBeenCalledWith(
      ItemFilters.DISCOUNT_50_60,
    )
    expect(addPriceFilterMocked).not.toHaveBeenCalled()
  })

  it('should handle sort change', () => {
    const scope = fork({
      values: [
        [
          $itemFilters,
          [ItemFilters.DISCOUNT_60_PLUS, ItemFilters.DISCOUNT_50_60],
        ],
      ],
    })
    const { getByTestId } = render(
      <Provider value={scope}>
        <VSFilters />
      </Provider>,
    )

    const select = getByTestId('price-sort')

    fireEvent.change(select, { target: { value: ItemSorting.BY_MIN_PRICE } })

    expect(sortItemsMocked).toHaveBeenCalledWith(ItemSorting.BY_MIN_PRICE)
  })
})
