import React, { FC, memo } from 'react'

import { useUnit } from 'effector-react'

import { Header } from '../../components/Header/Header'
import { VSFilters } from '../../components/VSFilters/VSFilters'
import { VSItem } from '../../components/VSItem/VSItem'
import {
  $vsFilteredItems,
  $vsItems,
  $vsNewItems,
  $vsTotalItems,
} from '../../models/items/vs'

import styles from './VSPage.module.scss'

export interface Props {}

export const VSPage: FC<Props> = memo(function VSPage(props) {
  const items = useUnit($vsItems)
  const vsTotalItems = useUnit($vsTotalItems)
  const vsFilteredItems = useUnit($vsFilteredItems)
  const vsNewItems = useUnit($vsNewItems)

  return (
    <main className={styles.main}>
      <Header
        totalItems={vsTotalItems}
        filteredItems={vsFilteredItems}
        newItems={vsNewItems}
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
