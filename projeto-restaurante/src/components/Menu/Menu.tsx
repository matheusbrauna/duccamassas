import { Item } from './Item'
import styles from './Menu.module.scss'

export interface IMenu {
  _id: string
  recipe: string
  ingredients: string
  price: string
}

interface MenuProps {
  menu: IMenu[]
}

export function Menu({ menu }: MenuProps) {
  const menuRender = menu.map((item) => (
    <Item
      key={item._id}
      recipe={item.recipe}
      ingredients={item.ingredients}
      price={item.price}
    />
  ))

  return (
    <section className={styles['menu-wrapper']}>
      <div className={styles.menu}>
        <h2 className="gold">Menu</h2>
        <ul className={styles.list}>{menuRender}</ul>
      </div>
    </section>
  )
}
