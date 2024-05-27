import React from 'react'
import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'
import  Game  from './game/game.jsx';


function quizzes() {
  return (
    <>
    <div className={styles.cardContainer}>
    <Link style={{textDecoration: 'none'}} href="/quizzes/game">
    <div className={styles.card}>
    <div className={styles.cardImage}></div>
          <div className={styles.cardContent}>
            <p>Quiz 1</p>
            <p>Some description about the quiz</p>
          <Game />
          </div>
           
  </div>

</Link>

      <Link style={{textDecoration: 'none'}} href="/quizzes/game1">
        <div className={styles.card}>

          <div className={styles.cardImage}></div>
          <div className={styles.cardContent}>
            <p>Quiz 2</p>
            <p>Some description about the quiz</p>
          </div>


        </div>
      </Link> 

      <Link style={{textDecoration: 'none'}} href="/quizzes/game2">
        <div className={styles.card}>

          <div className={styles.cardImage}></div>
          <div className={styles.cardContent}>
            <p>Quiz 3</p>
            <p>Some description about the quiz</p>
          </div>


        </div>
      </Link> 

    </div>
    </>
  )
}

export default quizzes