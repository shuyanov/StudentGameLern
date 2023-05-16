import React, { FC } from 'react'

type ImageProps = {
  src: string
  className?: string
  alt?: string
  height?: number
  width?: number
  loading?: 'lazy' | 'eager'
  onClick?: () => void
}
export const Image: FC<ImageProps> = ({
  src,
  className,
  alt,
  height,   
  width,
  loading,
  onClick
}: ImageProps) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      height={height}
      width={width}
      onClick={onClick}
    />
  )
}
