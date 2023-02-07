import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import Image from 'next/image'

import styles from './ImageText.module.scss'

import { sanityClient } from 'lib/sanity'

export interface IImageText {
  _id: string
  button: string
  image: UseNextSanityImageProps
  text: string
  title: string
  email?: string
  number?: string
  top_title: string
  url: string
}

interface ImageTextProps {
  data: IImageText
}

export function ImageText({ data }: ImageTextProps) {
  const { top_title, title, text, button, url, image, email, number } = data
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
        {email && <p>{email}</p>}
        {number && <p>{number}</p>}
        <a href={url} className="btn btn-primary">
          {button} &rarr;
        </a>
      </div>
    </section>
  )
}
