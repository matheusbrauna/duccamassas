import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import Image from 'next/image'

import styles from './Item.module.scss'

import { sanityClient } from 'lib/sanity'

interface ItemProps {
  title: string
  category: string
  image: UseNextSanityImageProps
}

export function Item({ title, category, image }: ItemProps) {
  const imageProps = useNextSanityImage(sanityClient, image)

  return (
    <div className={styles.item}>
      <Image src={imageProps.src} alt={title} width={200} height={200} />
      <h3>{category}</h3>
      <h4>{title}</h4>
    </div>
  )
}
