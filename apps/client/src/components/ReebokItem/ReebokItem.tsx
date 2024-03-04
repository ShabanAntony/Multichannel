import React, { FC, memo } from 'react'

import { ReebokItemEntity } from '@server-api'
import classNames from 'classnames'

import { laryToUSD } from '../../constants/prices'
import {
  calculateReebokFinalPrice,
  formatLaryPrice,
  formatUSDPrice,
} from '../../utils/price'
import { ImageLink } from '../ImageLink/ImageLink'

import styles from './ReebokItem.module.scss'

export interface Props {
  readonly data: ReebokItemEntity & { discount: number }
}

export const ReebokItem: FC<Props> = memo(function ReebokItem({
  data: { title, url, image, price, salePrice, discount, isNew },
}) {
  const finalPrice = calculateReebokFinalPrice(salePrice)
  const baseClasses = classNames(styles.base, {
    [styles.base__new]: isNew,
  })

  return (
    <li className={baseClasses}>
      <ImageLink
        className={styles.image}
        link={url}
        src={image}
        alt={title}
        width={200}
        height={200}
      />
      <p className={styles.name}>{title}</p>
      <p>
        Prices: {price}
        {' > '}
        <span className={styles.discount}>
          {salePrice} ({Math.round(discount)}%)
        </span>
        {' > '}
        <span className={styles.finalPrice}>
          {formatUSDPrice(finalPrice)} (
          {formatLaryPrice(finalPrice * laryToUSD)})
        </span>
      </p>
    </li>
  )
})
