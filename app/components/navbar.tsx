import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export default function Navbar() {

  return (
    <div className={styles.navbar}>
      <div className={styles.stack}>
        <div className={styles.navlinks}>
          <Link className={styles.bigText} href={"/"}>Learning Limbo</Link>
          <Link className={styles.smallText} href={"/"}>Home</Link>
          <Link className={styles.smallText} href={"/quizzes"}>Quizzes</Link>
          <Link className={styles.smallText} href={"/students"}>Students</Link>
          <Link className={styles.smallText} href={"/createQuestion"}>Create Question</Link>
          <Link className={styles.smallText} href={"/statistics"}>Statistics</Link>
        </div>

        <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
        </div>
      </div>



    </div>
  )
}
