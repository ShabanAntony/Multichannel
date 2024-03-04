import React, { FC, memo } from 'react'

import classNames from 'classnames'

import { useVisibilityObserver } from '../../utils/VisibilityObserver'

import styles from './ImageLink.module.scss'

export interface Props {
  readonly className?: string
  readonly link: string
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
}

export const ImageLink: FC<Props> = memo(function ImageLink({
  className,
  link,
  src,
  alt,
  width,
  height,
}) {
  const [ref, isVisible] = useVisibilityObserver()
  const baseClasses = classNames(styles.base, className, {
    [styles.base__skeleton]: !isVisible,
  })

  return (
    <a
      className={baseClasses}
      href={link}
      target="_blank"
      rel="noreferrer"
      ref={ref}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  )
})
