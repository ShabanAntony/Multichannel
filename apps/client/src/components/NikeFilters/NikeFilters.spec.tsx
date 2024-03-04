import React from 'react'

import { fireEvent, render } from '@testing-library/react'
import { fork } from 'effector'
import { Provider } from 'effector-react'

import { ItemFilters } from '../../constants/filters'
import { ItemSorting } from '../../constants/sorting'
import { $itemFilters } from '../../models/filters'
import { $itemSorting, setSorting } from '../../models/sorting'
import { NikeFilters } from './NikeFilters'

const sortItemsMocked = jest.fn()

setSorting.watch(sortItemsMocked)

describe('NikeFilters', () => {
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
        <NikeFilters />
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
        <NikeFilters />
      </Provider>,
    )

    expect(baseElement).toBeTruthy()
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
        <NikeFilters />
      </Provider>,
    )

    const select = getByTestId('price-sort')

    fireEvent.change(select, { target: { value: ItemSorting.BY_MIN_PRICE } })

    expect(sortItemsMocked).toHaveBeenCalledWith(ItemSorting.BY_MIN_PRICE)
  })
})
