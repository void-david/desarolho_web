import styles from '@/styles/navbar.module.css';
import Link from 'next/link';

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <div className={styles.stack}>
        <div className={styles.navlinks}>
          <Link className={styles.bigText} href={"/"}>Learning Limbo</Link>
          <Link className={styles.smallText} href={"/"}>Home</Link>
          <Link className={styles.smallText} href={"/quizzes"}>Quizzes</Link>
          <Link className={styles.smallText} href={"/"}>Resources</Link>
          <Link className={styles.smallText} href={"/"}>Statistics</Link>
        </div>

        <div>sefwfafa</div>
      </div>



    </div>
  )
}
