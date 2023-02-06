import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import Image from 'next/image'

import styles from './Review.module.scss'

import { sanityClient } from 'lib/sanity'

interface ReviewProps {
  name: string
  review: string
  image: UseNextSanityImageProps
}

export function Review({ name, review, image }: ReviewProps) {
  const imageProps = useNextSanityImage(sanityClient, image)

  return (
    <article className={styles.review}>
      <div className={styles.avatar}>
        <Image src={imageProps.src} alt={name} fill />
      </div>
      <span>{name}</span>
      <q>{review}</q>
    </article>
  )
}
