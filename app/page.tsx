import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';


export default function Home() {
  
  return (
    <>

    <div className={styles.mainPage}>
      <div className={styles.leftPageContainer}>

        <div className={styles.leftMainContainer}>
          <h1>Welcome to Learning Limbo.</h1>
          <h2>Learning Limbo is a platform 
              that allows you to create and 
              take quizzes. It is a great way 
              to test your knowledge and learn new things.</h2>
        </div>
      </div>

      <div className={styles.rightPageContainer}>

        <div className={styles.rightMainContainer}>
          <h1 style={{fontSize: '2rem', color: 'var(--secondary-color)', fontWeight: '700'}}>Let's Begin.</h1>

          <div className={styles.buttonContainer}>

            <SignedOut>
              <SignInButton>
                <button className={styles.button}>Log in</button>
              </SignInButton>
              <SignInButton>
                <button className={styles.button}>Sign up</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link style={{textDecoration: 'none'}} href={"/quizzes"}>
                <button className={styles.button}>Go to quizzes</button>
              </Link>
            </SignedIn>

          </div>

        </div>

        <div className={styles.limboContainer}>
        <Image
        src="/logo.png"
        width={35}
        height={35}
        alt="logo"
        />
        <h1 style={{color: 'white', fontSize: '0.8rem'}}> Learning Limbo</h1>
        </div>

      </div>
    </div>

    </>
  );
}
