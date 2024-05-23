'use client';

import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineCloseCircle  } from "react-icons/ai";
import { useState } from 'react';

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.stack}>
        <Link className={styles.bigText} href="/">Learning Limbo</Link>
        <div className={styles.navlinks}>
          <Link className={styles.navlink} href="/">Home</Link>
          <Link className={styles.navlink} href="/quizzes">Quizzes</Link>
          <Link className={styles.navlink} href="/students">Students</Link>
          <Link className={styles.navlink} href="/createQuestion">Create Question</Link>
          <Link className={styles.navlink} href="/statistics">Statistics</Link>
        </div>

        <div className={styles.menu}>
          <SignedOut>
            <SignInButton>
              <button className={styles.accountButton}>Sign in</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <AiOutlineMenu className={styles.menuIcon} onClick={handleClick} /> 

          <div className={`${styles.mobileNav} ${isOpen ? styles.active : ''}`}> 
          <div style={{display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
            <AiOutlineCloseCircle  className={styles.closeIcon} onClick={handleClick} /> 
          </div>
          <SignedOut>
            <SignInButton>
              <h1 className={styles.navlink}>Sign in</h1>
            </SignInButton>
          </SignedOut>
            <Link className={styles.navlink} href="/">Home</Link>
            <Link className={styles.navlink} href="/quizzes">Quizzes</Link>
            <Link className={styles.navlink} href="/students">Students</Link>
            <Link className={styles.navlink} href="/createQuestion">Create Question</Link>
            <Link className={styles.navlink} href="/statistics">Statistics</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}
