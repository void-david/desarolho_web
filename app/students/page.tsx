import React from 'react'
import styles from '@/styles/students.module.css'
import { AiFillStar } from "react-icons/ai";


function students() {
  return (
    <div className={styles.container}>
      Member Details

      <div className={styles.tableRow}>
        <div className={styles.tableCell}>Name</div>
        <div className={styles.tableCell}>Quiz</div>
        <div className={styles.tableCell}>Enrrolled</div>
        <div className={styles.tableCell}>Score</div>
        <div className={styles.tableCell}>Rating</div>
      </div>

      <div className={styles.tableRow}>
        <div className={styles.tableCell}>

          <div className={styles.name}>Student Name 1 With a long name</div>
          <div className={styles.email}>student1@gmail.com</div>

        </div>

        <div className={styles.tableCell}>Calculo diferencial II</div>
        <div className={styles.tableCell}>25 May 2025</div>
        <div className={styles.tableCell}>96</div>
        <div className={styles.tableCell}>
          <div>
          <AiFillStar />
          4.5
          </div>
        </div>
      </div>


      <div className={styles.tableRow}>
        <div className={styles.tableCell}>

          <div className={styles.name}>Student Name 2 With a long name</div>
          <div className={styles.email}>student2@gmail.com</div>
          
        </div>

        <div className={styles.tableCell}>Calculo diferencial II</div>
        <div className={styles.tableCell}>25 May 2025</div>
        <div className={styles.tableCell}>96</div>
        <div className={styles.tableCell}>
          <div>
          <AiFillStar />
          4.5
          </div>

        </div>
      </div>

    </div>
  )
}

export default students