import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'

export default function Gamelink() {
  return (
    <div className={styles.cardContainer}>
      <Link style={{textDecoration: 'none'}} href="https://fernandotenchipe.github.io/LearningLimbo/">
      <div className={styles.card}>
      <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Play Game!</p>
            </div>
            
      </div>

      </Link>
    </div>
  )
}