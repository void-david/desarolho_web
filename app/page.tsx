import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';


function Login() {
  
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
          <h1 style={{fontSize: '2rem', color: 'var(--secondary-color)', fontWeight: '700'}}>Lets Begin.</h1>

          <div className={styles.buttonContainer}>

            <SignedOut>
              <SignInButton>
                <button className={styles.button}>Log in</button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Link style={{ textDecoration: 'none', marginBottom: '10px' }} href={"/home"}>
                <button className={styles.button}>Go to Home</button>
              </Link>
              <SignOutButton>
                <button className={styles.button}>Log out</button>
              </SignOutButton>
            </div>
    
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

export default Login;
