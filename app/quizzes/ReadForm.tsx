// QuizForm.tsx
import React, { useState } from 'react';
import styles from '@/styles/quizzes.module.css'

const ReadForm = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("");

  const handleSelectChange = (eventSelect: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedQuiz(eventSelect.target.value);
  };

  const handleGet = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const resRead = await fetch('http://localhost:3001/api/get-questions');
    const dataRead = await resRead.json();
    console.log(dataRead);
  };

  return (
    <form onSubmit={handleGet}>
      <div className={styles.box}>
        <select className={styles.feedbackContent} defaultValue="" onChange={handleSelectChange}>
          <option value="" disabled>Pick a Quiz</option>
          <option value="quiz1">Quiz 1</option>
          <option value="quiz2">Quiz 2</option>
          <option value="quiz3">Quiz 3</option>
        </select>
      </div>
      <button type="submit">Get Questions</button>
    </form>
  );
};

export default ReadForm;