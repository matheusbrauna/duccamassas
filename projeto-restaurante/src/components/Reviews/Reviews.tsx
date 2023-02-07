import { UseNextSanityImageProps } from 'next-sanity-image'

import { Review } from './Review'
import styles from './Reviews.module.scss'

export interface IReview {
  _id: string
  image: UseNextSanityImageProps
  name: string
  review: string
}

interface ReviewsProps {
  reviews: IReview[]
}

export function Reviews({ reviews }: ReviewsProps) {
  const renderReviews = reviews.map((review) => (
    <Review
      key={review._id}
      name={review.name}
      review={review.review}
      image={review.image}
    />
  ))

  return (
    <section className={styles.reviews}>
      <header className={styles.heading}>
        <span>Depoimentos</span>
        <h2>Dos nossos clientes</h2>
      </header>
      <div className={styles.content}>{renderReviews}</div>
    </section>
  )
}
