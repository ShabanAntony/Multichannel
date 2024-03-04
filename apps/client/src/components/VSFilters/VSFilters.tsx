import React, { ChangeEvent, FC, useCallback } from 'react'

import { useUnit } from 'effector-react'

import { ItemFilters } from '../../constants/filters'
import { ItemSorting } from '../../constants/sorting'
import {
  $itemFilters,
  addPriceFilter,
  removePriceFilter,
} from '../../models/filters'
import { $itemSorting, setSorting } from '../../models/sorting'

import styles from './VSFilters.module.scss'

export interface Props {}

export const VSFilters: FC<Props> = () => {
  const sorting = useUnit($itemSorting)
  const filters = useUnit($itemFilters)

  const handlePriceFilterCheckboxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        addPriceFilter(parseInt(event.target.value, 10) as ItemFilters)
      } else {
        removePriceFilter(parseInt(event.target.value, 10) as ItemFilters)
      }
    },
    [],
  )

  const handleSortChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setSorting(parseInt(event.target.value, 10) as ItemSorting)
    },
    [],
  )

  return (
    <div className={styles.base}>
      <label className={styles.dropdown}>
        Сортировать по
        <select
          onChange={handleSortChange}
          data-testid="price-sort"
          defaultValue={sorting}
        >
          <option value={ItemSorting.BY_MAX_DISCOUNT}>
            максимальной скидке
          </option>
          <option value={ItemSorting.BY_MIN_PRICE}>минимальной цене</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          name="50"
          value={ItemFilters.DISCOUNT_50_60}
          checked={filters.includes(ItemFilters.DISCOUNT_50_60)}
          onChange={handlePriceFilterCheckboxChange}
          data-testid="price-filter-discount_50_60"
        />{' '}
        50%-60%
      </label>
      <label>
        <input
          type="checkbox"
          name="60"
          value={ItemFilters.DISCOUNT_60_PLUS}
          checked={filters.includes(ItemFilters.DISCOUNT_60_PLUS)}
          onChange={handlePriceFilterCheckboxChange}
          data-testid="price-filter-discount_60_plus"
        />{' '}
        60%+
      </label>
    </div>
  )
}
