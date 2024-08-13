'use client';
import styles from '@/styles/quizzes.module.css'


export default function Delete() {
    //node fetch() to send data to the server
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const res = await fetch('https://desarolhoweb-production.up.railway.app/api/deleteLastQuestion', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (res.status === 200) {
          alert('Last question successfully deleted');
        } else {
          alert('An error occurred');
        }
      }

    return (
      <>
        <form className={styles.valuesSection} onSubmit={handleSubmit}>
        <h2>Delete Last Question?</h2>
            <div className={styles.box}>
                <button className={styles.submitButton} type="submit">
                Delete
                </button>
            </div>
        </form>
      </>
    )
  }