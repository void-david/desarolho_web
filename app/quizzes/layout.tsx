import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <>
        <div>{children}</div>


      <div className={styles.mainContainer}>

        <div className={styles.leftContainer}>
            <div className={styles.formCard}>
            <div className={styles.buttonContainer}>
                <button className={styles.formsButton}>Create</button>
                <button className={styles.formsButton}>Read</button>
                <button className={styles.formsButton}>Update</button>
                <button className={styles.formsButton}>Delete</button>
            </div>
            <form className={styles.valuesSection}>
                <div className={styles.smallText}>Please complete the fields below with your question 
                and possible answers.</div>
            </form>
            </div>
        </div>

        
      </div>
        
        </>
    );
  }