import React from 'react'
import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'



function quizzes() {
  return (
    <>

    <div className={styles.mainContainer}>

    <div className={styles.leftContainer}>
        <div className={styles.formCard}>
          <h2>Create Question</h2>
          <div className={styles.smallText}>Please complete the fields below with your question 
          and possible answers.</div>






          
        </div>
      </div>


      <div className={styles.cardContainer}>
      <Link style={{textDecoration: 'none'}} href="/game">
      <div className={styles.card}>
      <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 1</p>
              <p>Some description about the quiz</p>
            </div>
            
      </div>

  </Link>

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 2</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

      </div>



    </div>


    </>
  )
}

export default quizzes