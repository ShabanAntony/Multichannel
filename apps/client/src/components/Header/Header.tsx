import React, { FC, PropsWithChildren, memo } from 'react'
import { Link, generatePath, useLocation } from 'react-router-dom'

import classNames from 'classnames'

import { BrandTypes, Pages } from '../../constants/router'

import styles from './Header.module.scss'

export interface Props {
  totalItems: number
  filteredItems: number
  newItems: number
}

export const URLS = [
  {
    title: "Victoria's secret",
    url: generatePath(Pages.ITEMS, { brandType: BrandTypes.Classic }),
  },
  {
    title: 'PINK',
    url: generatePath(Pages.ITEMS, { brandType: BrandTypes.PINK }),
  },
  {
    title: 'Nike',
    url: generatePath(Pages.ITEMS, { brandType: BrandTypes.NIKE }),
  },
  {
    title: 'Reebok',
    url: generatePath(Pages.ITEMS, { brandType: BrandTypes.REEBOK }),
  },
]

export const Header: FC<PropsWithChildren<Props>> = memo(function Header({
  totalItems,
  filteredItems,
  newItems,
  children,
}) {
  const location = useLocation()

  return (
    <div className={styles.base}>
      <div className={styles.links}>
        {URLS.map(({ title, url }) => (
          <Link
            to={url}
            key={title}
          >
            <span
              className={classNames(styles.links_item, {
                [styles.links_item__selected]: url === location.pathname,
              })}
            >
              {title}
            </span>
          </Link>
        ))}
      </div>
      <div className={styles.header}>
        <span>
          Всего: <strong>{totalItems}</strong>, подходящих:{' '}
          <strong>{filteredItems}</strong>, новых: <strong>{newItems}</strong>
        </span>
        {children}
      </div>
    </div>
  )
})
