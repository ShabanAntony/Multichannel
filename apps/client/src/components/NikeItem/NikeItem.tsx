import React, { FC, memo } from 'react'

import { NikeItemEntity } from '@server-api'
import classNames from 'classnames'

import { laryToUSD } from '../../constants/prices'
import {
  calculateNikeFinalPrice,
  formatLaryPrice,
  formatUSDPrice,
} from '../../utils/price'
import { ImageLink } from '../ImageLink/ImageLink'

import styles from './NikeItem.module.scss'

export interface Props {
  readonly data: NikeItemEntity & { discount: number }
}

export const NikeItem: FC<Props> = memo(function NikeItem({
  data: { title, url, image, price, salePrice, discount, isNew },
}) {
  const finalPrice = calculateNikeFinalPrice(salePrice)
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
        height={280}
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
