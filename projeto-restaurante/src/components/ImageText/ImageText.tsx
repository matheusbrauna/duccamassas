import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import Image from 'next/image'

import styles from './ImageText.module.scss'

import { sanityClient } from 'lib/sanity'

interface ImageTextProps {
  data: {
    _id: string
    button: string
    image: UseNextSanityImageProps
    text: string
    title: string
    top_title: string
    url: string
  }
}

export function ImageText({ data }: ImageTextProps) {
  const { top_title, title, text, button, url, image } = data
  const imageProps = useNextSanityImage(sanityClient, image)

  return (
    <section className={styles.section}>
      <div className={styles.image}>
        <Image src={imageProps.src} alt="" fill quality={100} priority />
      </div>
      <div className={styles.content}>
        <span>{top_title}</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <a href={url} className="btn btn-primary">
          {button} &rarr;
        </a>
      </div>
    </section>
  )
}
