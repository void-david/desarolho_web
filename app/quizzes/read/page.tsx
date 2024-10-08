'use client';
import styles from '@/styles/quizzes.module.css'
import { useState, useEffect } from 'react';


type Question = {
  id: number;
  description: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  answer_4: string;
  answer_correct: string;
  materia: string;
};

export default function Read() {
  
    const [questions, setQuestions] = useState<Question[]>([]);
    const [selectedMateria, setSelectedMateria] = useState('');



    const handleSubmit = async () => {
      const res = await fetch('https://desarolhoweb-production.up.railway.app/api/get-questions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      setQuestions(data);
    };

    useEffect(() => {
      // Fetch questions when component mounts
      handleSubmit();
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedMateria(e.target.value);
    };
    

    return (
      <>
        <form className={styles.valuesSection} onSubmit={handleSubmit}>
          <h2>Question viewer</h2>
          <div className={styles.box}>
          </div>
        </form>
        <select className={styles.selector} value={selectedMateria} onChange={handleSelectChange}>
          <option value="">All</option>
          {questions
          .map(question => question.materia)
          .filter((materia, index, self) => self.indexOf(materia) === index)
          .map((materia, index) => (
            <option key={index} value={materia}>
              {materia}
            </option>
          ))}
        </select>
        {questions
          .filter((question) => !selectedMateria || question.materia === selectedMateria)
          .map((question, index) => (
            <div key={index}>
              <h3>{question.description}</h3>
              <p>{question.answer_1}</p>
              <p>{question.answer_2}</p>
              <p>{question.answer_3}</p>
              <p>{question.answer_4}</p>
              <p>{question.answer_correct}</p>
              <p>{question.materia}</p>
            </div>
          ))}
      </>
    )
  }
  