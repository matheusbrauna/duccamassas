import { Review } from './Review'
import styles from './Reviews.module.scss'

import { IReview } from 'app/page'

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
