'use client'

import React, { useState } from 'react';
import styles from '@/styles/navbar.module.css';
import { AiOutlineAliwangwang, AiOutlineHome, AiOutlineBarChart, AiOutlineSetting, AiOutlineLogout, AiFillCaretRight } from "react-icons/ai";
import Link from 'next/link'

export default function Navbar() {

  const [isMinimized, setIsMinimized] = useState(true);

  const handleMinimizeClick = () => {
    setIsMinimized(!isMinimized);
  };

  const containerStyle = isMinimized ? styles.minimizedContainer : styles.container;


  return (

    <div className={containerStyle}>
      <Link href="/" className={styles.titleHeader}>
        <AiOutlineAliwangwang className={styles.bigIcon} />
        {!isMinimized && <h1 className={styles.bigText}>Quiz Game</h1>}
      </Link>

      <div className={styles.buttonContainer} >
        <Link href="/" className={styles.button}>
          <AiOutlineHome className={styles.icon} />          
          {!isMinimized && <h2 className={styles.smallText}>Home</h2>}
        </Link>
        <Link href="/estadisticas" className={styles.button}>
          <AiOutlineBarChart className={styles.icon} />          
          {!isMinimized && <h2 className={styles.smallText}>Estadísticas</h2>}
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <div className={styles.button}>
          <AiOutlineSetting className={styles.icon} />          
          {!isMinimized && <h2 className={styles.smallText}>Configuración</h2>}
        </div>

        <div className={styles.button}>
          <AiOutlineLogout className={styles.icon} />          
          {!isMinimized && <h2 className={styles.smallText}>Salir</h2>}
        </div>
      </div>

      <div className={styles.minimizeButton} onClick={handleMinimizeClick}>
        <AiFillCaretRight className={styles.icon} />
      </div>

    </div>
  )
}
