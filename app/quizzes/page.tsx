'use client';
import styles from '@/styles/quizzes.module.css'


export default function Create() {
    //node fetch() to send data to the server
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const description = e.target.description.value;
        const answer_1 = e.target.answer1.value;
        const answer_2 = e.target.answer2.value;
        const answer_3 = e.target.answer3.value;
        const answer_4 = e.target.answer4.value;
        const answer_correct = e.target.answerCorrect.value;
        const materia = e.target.materia.value;
        const res = await fetch('https://desarolhoweb-production.up.railway.app/api/post-questions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            description,
            answer_1,
            answer_2,
            answer_3,
            answer_4,
            answer_correct,
            materia,
          }),
        });
        if (res.status === 200) {
          alert('Question successfully added');
        } else {
          alert('An error occurred');
        }
      }

    return (
      <>
        <form className={styles.valuesSection} onSubmit={handleSubmit}>
        <h2>Create Question</h2>
            <div className={styles.box}>
            <input
                type="text"   
                id="description"
                placeholder="Write here your question"
            />
            </div>
            <div className={styles.box}>
            <input
                type="text"
                id="answer1"
                placeholder="Answer 1"
            />
            </div>
            <div className={styles.box}>
            <input
                type="text"
                id="answer2"
                placeholder="Answer 2"
            />
            </div>
            <div className={styles.box}>
            <input
                type="text"
                id="answer3"
                placeholder="Answer 3"
            />
            </div>
            <div className={styles.box}>
            <input
                type="text"
                id="answer4"
                placeholder="Answer 4"
            />
            </div>
            <div className={styles.box}>
            <input
                type="text"
                id="answerCorrect"
                placeholder="Correct Answer"
            />
            </div>
            <div className={styles.box}>
            <input
                type="text"
                id="materia"
                placeholder="Course"
            />
            </div>
            <div className={styles.box}>
                <button className={styles.submitButton} type="submit">
                Submit
                </button>
            </div>
        </form>
      </>
    )
  }
  