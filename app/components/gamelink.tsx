import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'
import Image from 'next/image'
import LearningLimboImage from '@/public/learningLimboGame.jpeg'

export default function Gamelink() {
  return (
    <div className={styles.cardContainer}>
      <Link className={styles.card} style={{textDecoration: 'none'}} href="https://fernandotenchipe.github.io/LearningLimbo/">
      <Image
      src={LearningLimboImage}
      style={{width: 'auto', height: '100%'}}
      alt='Learning Limbo'
      />
      <div className={styles.cardContent}>
        <p>Play Game!</p>
      </div>
      </Link>
    </div>
  )
}