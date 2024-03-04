import React, { ChangeEvent, FC, useCallback } from 'react'

import { useUnit } from 'effector-react'

import { ItemSorting } from '../../constants/sorting'
import { $itemSorting, setSorting } from '../../models/sorting'

import styles from './NikeFilters.module.scss'

export interface Props {}

export const NikeFilters: FC<Props> = () => {
  const sorting = useUnit($itemSorting)
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
    </div>
  )
}
