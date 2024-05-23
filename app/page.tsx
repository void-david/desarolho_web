import styles from "@/app/page.module.css";


export default function Home() {
  
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>Welcome to Learning Limbo</h1>
        <p className={styles.text}>This is a learning platform for students and teachers to create and take quizzes.</p>
        <p className={styles.text}>Please sign in to get started.</p>

      </div>
    </>
  );
}
