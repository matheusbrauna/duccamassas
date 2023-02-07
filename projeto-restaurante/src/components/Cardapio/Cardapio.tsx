import { UseNextSanityImageProps } from 'next-sanity-image'

import styles from './Cardapio.module.scss'
import { Item } from './Item'

export interface ICardapio {
  _id: string
  button: string
  image: UseNextSanityImageProps
  category: string
  title: string
}

interface CardapioProps {
  cardapio: ICardapio[]
}

export function Cardapio({ cardapio }: CardapioProps) {
  const renderItems = cardapio.map((item) => (
    <Item
      key={item._id}
      category={item.category}
      title={item.title}
      image={item.image}
    />
  ))

  return (
    <section className={styles['cardapio-wrapper']}>
      <div className={styles.cardapio}>
        <h2 className="gold">No Cardápio</h2>
        <div className={styles.items}>{renderItems}</div>
      </div>
    </section>
  )
}
