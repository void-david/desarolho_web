'use client';
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

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <input type="text" value={answer1} onChange={(e) => setAnswer1(e.target.value)} placeholder="Answer 1" />
      <input type="text" value={answer2} onChange={(e) => setAnswer2(e.target.value)} placeholder="Answer 2" />
      <input type="text" value={answer3} onChange={(e) => setAnswer3(e.target.value)} placeholder="Answer 3" />
      <input type="text" value={answer4} onChange={(e) => setAnswer4(e.target.value)} placeholder="Answer 4" />
      <input type="text" value={answerCorrect} onChange={(e) => setAnswerCorrect(e.target.value)} placeholder="Correct Answer" />
      <input type="text" value={materia} onChange={(e) => setMateria(e.target.value)} placeholder="Materia" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostQuestionForm;