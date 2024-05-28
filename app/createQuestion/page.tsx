'use client';
import { group } from 'console';
import styles from '@/styles/createQuestion.module.css';
import React, { useState } from 'react';

const PostQuestionForm = () => {
  const [description, setDescription] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState('');
  const [materia, setMateria] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const question = {
      description,
      answer_1: answer1,
      answer_2: answer2,
      answer_3: answer3,
      answer_4: answer4,
      answer_correct: answerCorrect,
      materia,
    };

    const res = await fetch('http://localhost:3001/api/post-questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(question),
    });

    const data = await res.json();
    console.log(data);
  };
{}
  return (

    <>

    <div className={styles.mainContainer}>


    </div>

    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer1">Answer 1</label>
        <input
          type="text"
          id="answer1"
          value={answer1}
          onChange={(e) => setAnswer1(e.target.value)}
          placeholder="Answer 1"
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer2">Answer 2</label>
        <input
          type="text"
          id="answer2"
          value={answer2}
          onChange={(e) => setAnswer2(e.target.value)}
          placeholder="Answer 2"
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer3">Answer 3</label>
        <input
          type="text"
          id="answer3"
          value={answer3}
          onChange={(e) => setAnswer3(e.target.value)}
          placeholder="Answer 3"
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer4">Answer 4</label>
        <input
          type="text"
          id="answer4"
          value={answer4}
          onChange={(e) => setAnswer4(e.target.value)}
          placeholder="Answer 4"
        />
      </div>
      <div className="form-group">
        <label htmlFor="answerCorrect">Correct Answer</label>
        <input
          type="text"
          id="answerCorrect"
          value={answerCorrect}
          onChange={(e) => setAnswerCorrect(e.target.value)}
          placeholder="Correct Answer"
        />
      </div>
      <div className="form-group">
        <label htmlFor="materia">Materia</label>
        <input
          type="text"
          id="materia"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          placeholder="Materia"
        />
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>

    </>
  );
};

export default PostQuestionForm;