import React from 'react'
import styles from '@/styles/students.module.css'
import { AiFillStar } from "react-icons/ai";


function Students() {
  return (
    <>
    <div className={styles.header}> Students</div>
    <div className={styles.container}>

    {/* Este div tiene toda la información, es nomas contenedor */}
    <div className={styles.person}>
      {/* Este div tiene el avatar adentro, como tal no tiene width o height
       porque lo va a agarrar de la base, para que crezca el div */}
      <div className={styles.avatarContainer}>
        {/* Este div luego se tiene que reemplazar por un componente image de next, debe ser la pura imagen */}
         <div className={styles.avatar}></div>
      </div>
        
    </div>


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
    </>
  )
}

export default Students;