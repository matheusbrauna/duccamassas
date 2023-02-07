import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import Image from 'next/image'

import styles from './Header.module.scss'

import { sanityClient } from 'lib/sanity'

export interface IHeader {
  _id: string
  subtitle: string
  title: string
  image: UseNextSanityImageProps
}

interface HeaderProps {
  header: IHeader
}

export function Header({ header }: HeaderProps) {
  const imageProps = useNextSanityImage(sanityClient, header.image)

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1>{header.title}</h1>
        <p>{header.subtitle}</p>
      </div>
      <div className={styles.image}>
        <Image
          src={imageProps.src}
          fill
          alt="Imagem de uma pizza"
          quality={100}
          priority
        />
      </div>
    </header>
  )
}
