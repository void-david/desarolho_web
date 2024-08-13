import React from 'react'
import styles from '@/styles/students.module.css'
import { AiFillStar } from "react-icons/ai";
import { clerkClient } from '@clerk/clerk-sdk-node';



const Students = async () => {
  const userList = await clerkClient.users.getUserList();
  //console.log(userList);
  return (
    <>
    
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
        <div className={styles.tableCell}>ID</div>
        <div className={styles.tableCell}>Fist name</div>
        <div className={styles.tableCell}>Last name</div>
        <div className={styles.tableCell}>Created at</div>
        <div className={styles.tableCell}>Updated at</div>
      </div>

      {userList.data.map((user, index) => (
        <div className={styles.tableRow} key={index}>
          <div className={styles.tableCell}>{user.id}</div>
          <div className={styles.tableCell}>{user.firstName}</div>
          <div className={styles.tableCell}>{user.lastName}</div>
          <div className={styles.tableCell}>{new Date(user.createdAt).toLocaleString()}</div>
          <div className={styles.tableCell}>{new Date(user.updatedAt).toLocaleString()}</div>

        </div>
      ))}

    </div>
    </>
  )
}

export default Students;