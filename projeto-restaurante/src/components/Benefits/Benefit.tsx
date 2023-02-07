import { useNextSanityImage, UseNextSanityImageProps } from 'next-sanity-image'
import Image from 'next/image'

import styles from './Benefit.module.scss'

import { sanityClient } from 'lib/sanity'

interface BenefitProps {
  title: string
  subtitle: string
  icon: UseNextSanityImageProps
}

export function Benefit({ title, subtitle, icon }: BenefitProps) {
  const imageProps = useNextSanityImage(sanityClient, icon)

  return (
    <div className={styles.benefit}>
      <Image
        src={imageProps.src}
        alt=""
        width={56}
        height={56}
        quality={100}
        priority
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
    </div>
  )
}
