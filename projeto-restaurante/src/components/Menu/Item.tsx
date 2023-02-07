import styles from './Item.module.scss'

interface ItemProps {
  recipe: string
  ingredients: string
  price: string
}

export function Item({ ingredients, price, recipe }: ItemProps) {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <h3>{recipe}</h3>
        <h4>{ingredients}</h4>
      </div>
      <div className={styles.divider} />
      <h5>R$ {price}</h5>
    </li>
  )
}
