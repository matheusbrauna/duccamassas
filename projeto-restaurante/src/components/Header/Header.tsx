import { useNextSanityImage } from 'next-sanity-image'
import Image from 'next/image'

import styles from './Header.module.scss'

import { IHeader } from 'app/page'
import { sanityClient } from 'lib/sanity'

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
        <Image src={imageProps.src} fill alt="Imagem de uma pizza" />
      </div>
    </header>
  )
}
