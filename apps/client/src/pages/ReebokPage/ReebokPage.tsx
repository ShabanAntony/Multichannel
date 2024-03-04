import React, { FC, memo } from 'react'

import { useUnit } from 'effector-react'

import { Header } from '../../components/Header/Header'
import { NikeFilters } from '../../components/NikeFilters/NikeFilters'
import { ReebokItem } from '../../components/ReebokItem/ReebokItem'
import {
  $reebokFilteredItems,
  $reebokItems,
  $reebokNewItems,
  $reebokTotalItems,
} from '../../models/items/reebok'

import styles from './ReebokPage.module.scss'

export interface Props {}

export const ReebokPage: FC<Props> = memo(function ReebokPage() {
  const items = useUnit($reebokItems)
  const reebokTotalItems = useUnit($reebokTotalItems)
  const reebokFilteredItems = useUnit($reebokFilteredItems)
  const reebokNewItems = useUnit($reebokNewItems)

  return (
    <main className={styles.main}>
      <Header
        totalItems={reebokTotalItems}
        filteredItems={reebokFilteredItems}
        newItems={reebokNewItems}
      >
        <NikeFilters />
      </Header>
      <ul className={styles.table}>
        {items.map((data, index) => (
          <ReebokItem
            data={data}
            key={data.id}
          />
        ))}
      </ul>
    </main>
  )
})
