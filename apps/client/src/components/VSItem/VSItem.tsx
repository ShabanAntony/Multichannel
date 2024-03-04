import React, { FC, memo } from 'react'

import { SaleItemEntity } from '@server-api'
import classNames from 'classnames'

import { laryToUSD } from '../../constants/prices'
import {
  calculateVSFinalPrice,
  formatLaryPrice,
  formatUSDPrice,
} from '../../utils/price'
import { ImageLink } from '../ImageLink/ImageLink'

import styles from './VSItem.module.scss'

export interface Props {
  readonly data: SaleItemEntity
}

export const VSItem: FC<Props> = memo(function VSItem({
  data: {
    name,
    url,
    parsedPrice,
    parsedDiscount,
    discount,
    productImages,
    swatches,
    isNew,
  },
}) {
  const finalPrice = calculateVSFinalPrice(parsedDiscount)
  const baseClasses = classNames(styles.base, {
    [styles.base__new]: isNew,
  })

  return (
    <li className={baseClasses}>
      <ImageLink
        className={styles.image}
        link={`${process.env.NX_PUBLIC_VS_HOST}${url}`}
        src={`${process.env.NX_PUBLIC_VS_HOST}/p/200x280/${productImages[0]}.jpg`}
        alt={name}
        width={200}
        height={280}
      />
      <p className={styles.name}>{name}</p>
      <p>
        Prices: {parsedPrice}
        {' > '}
        <span className={styles.discount}>
          {parsedDiscount} ({Math.round(discount)}%)
        </span>
        {' > '}
        <span className={styles.finalPrice}>
          {formatUSDPrice(finalPrice)} (
          {formatLaryPrice(finalPrice * laryToUSD)})
        </span>
      </p>
      <div className={styles.swatches}>
        {swatches
          .filter(({ swatchImage }) => !!swatchImage)
          .map(({ url, swatchImage, name }, index) => (
            <ImageLink
              className={styles.swatch_link}
              key={`swatch-${name}-${index}`}
              link={`${process.env.NX_PUBLIC_VS_HOST}${url}`}
              src={`${process.env.NX_PUBLIC_VS_HOST}/p/125x125/${swatchImage}.jpg`}
              alt={name}
              width={35}
              height={35}
            />
          ))}
      </div>
    </li>
  )
})
