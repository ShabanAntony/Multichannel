import React, { FC, memo } from 'react'

import { useUnit } from 'effector-react'

import { Header } from '../../components/Header/Header'
import { VSFilters } from '../../components/VSFilters/VSFilters'
import { VSItem } from '../../components/VSItem/VSItem'
import { $pinkItems } from '../../models/items/pink'
import {
  $pinkFilteredItems,
  $pinkNewItems,
  $pinkTotalItems,
} from '../../models/items/pink'

import styles from './PinkPage.module.scss'

export interface Props {}

export const PinkPage: FC<Props> = memo(function PinkPage() {
  const items = useUnit($pinkItems)
  const pinkTotalItems = useUnit($pinkTotalItems)
  const pinkFilteredItems = useUnit($pinkFilteredItems)
  const pinkNewItems = useUnit($pinkNewItems)

  return (
    <main className={styles.main}>
      <Header
        totalItems={pinkTotalItems}
        filteredItems={pinkFilteredItems}
        newItems={pinkNewItems}
      >
        <VSFilters />
      </Header>
      <ul className={styles.table}>
        {items.map((data, index) => (
          <VSItem
            data={data}
            key={`item-${data.name}-${data.masterStyleId}-${index}`}
          />
        ))}
      </ul>
    </main>
  )
})
