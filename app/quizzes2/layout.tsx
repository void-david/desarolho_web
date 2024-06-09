import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'
import Gamelink from '../components/gamelink'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
      <div className={styles.mainContainer}>

        <div className={styles.leftContainer}>
            <div className={styles.formCard}>
            <div className={styles.buttonContainer}>
                <Link href="/quizzes2/create">
                  <button className={styles.formsButton}>Create</button>
                </Link>
                <Link href="/quizzes2/read">
                  <button className={styles.formsButton}>Read</button>
                </Link>
                <Link href="/quizzes2/update">
                  <button className={styles.formsButton}>Update</button>
                </Link>
                <Link href="/quizzes2/delete">
                  <button className={styles.formsButton}>Delete</button>
                </Link>

            </div>
            {children}
            </div>
        </div>

        <Gamelink />
      </div>
        
        </>
    );
  }