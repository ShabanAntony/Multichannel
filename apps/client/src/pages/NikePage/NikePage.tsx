import React, { FC, memo } from 'react'

import { useUnit } from 'effector-react'

import { Header } from '../../components/Header/Header'
import { NikeFilters } from '../../components/NikeFilters/NikeFilters'
import { NikeItem } from '../../components/NikeItem/NikeItem'
import { $nikeItems } from '../../models/items/nike'
import {
  $nikeFilteredItems,
  $nikeNewItems,
  $nikeTotalItems,
} from '../../models/items/nike'

import styles from './NikePage.module.scss'

export interface Props {}

export const NikePage: FC<Props> = memo(function NikePage() {
  const items = useUnit($nikeItems)
  const nikeTotalItems = useUnit($nikeTotalItems)
  const nikeFilteredItems = useUnit($nikeFilteredItems)
  const nikeNewItems = useUnit($nikeNewItems)

  return (
    <main className={styles.main}>
      <Header
        totalItems={nikeTotalItems}
        filteredItems={nikeFilteredItems}
        newItems={nikeNewItems}
      >
        <NikeFilters />
      </Header>
      <ul className={styles.table}>
        {items.map((data, index) => (
          <NikeItem
            data={data}
            key={data.id + index}
          />
        ))}
      </ul>
    </main>
  )
})
