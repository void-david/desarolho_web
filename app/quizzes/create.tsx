import React, { useState } from 'react';
import styles from '@/styles/quizzes.module.css'

const Create = () => {
  const [description, setDescription] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState('');
  const [materia, setMateria] = useState("Chemistry");

  return (
    <>
      <div className={styles.smallText}>Please complete the fields below with your question 
      and possible answers.</div>
      <div className={styles.box}>
        <input
          type="text"
          id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write here your question"
          />
        </div>
        <div className={styles.box}>
          <input
            type="text"
            id="answer1"
            value={answer1}
            onChange={(e) => setAnswer1(e.target.value)}
            placeholder="Answer 1"
          />
        </div>
        <div className={styles.box}>
          <input
            type="text"
            id="answer2"
            value={answer2}
            onChange={(e) => setAnswer2(e.target.value)}
            placeholder="Answer 2"
          />
        </div>
        <div className={styles.box}>
          <input
            type="text"
            id="answer3"
            value={answer3}
            onChange={(e) => setAnswer3(e.target.value)}
            placeholder="Answer 3"
          />
        </div>
        <div className={styles.box}>
          <input
            type="text"
            id="answer4"
            value={answer4}
            onChange={(e) => setAnswer4(e.target.value)}
            placeholder="Answer 4"
          />
        </div>
        <div className={styles.box}>
          <input
            type="text"
            id="answerCorrect"
            value={answerCorrect}
            onChange={(e) => setAnswerCorrect(e.target.value)}
            placeholder="Correct Answer"
          />
        </div>
        <div className={styles.box}>
          <input
            type="text"
            id="materia"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            placeholder="Course"
          />
        </div>
    </>
  );
};


export default Create;