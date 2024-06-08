'use client';
import React, { useState } from 'react';
import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'

// CRUD files
import Create from './create';
import Read from './read';
import Update from './update';
import Delete from './delete';


 const Quizzes = () =>{
  const [action, setAction] = useState('create');
  const [description, setDescription] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState('');
  const [materia, setMateria] = useState("Chemistry");
  const [preg, setPreg] = useState(0);
  const [isGetSub, setIsGetSub] = useState(false);
   
  const placeholderData = [{
    id: 11,
    description: "Question updated",
    answer_1: "First possible answer",
    answer_2: "Second possible answer",
    answer_3: "Third possible answer",
    answer_4: "Fourth possible answer",
    answer_correct: "Correct answer",
    materia: "Subject of the question"
  }];
  
  const [data, setData] = useState(placeholderData);

  interface MateriaItem {
    id: number;
    materia: string;
  }
  
  const getMaterias = async () => {
    const res = await fetch('https://desarolhoweb-production.up.railway.app/api/get-materias', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    const data = await res.json();
  
    const materias = data.map((item: MateriaItem) => item.materia);
  
    return materias;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsGetSub(true);

    if(action == 'create'){
      const question = {
        description,
        answer_1: answer1,
        answer_2: answer2,
        answer_3: answer3,
        answer_4: answer4,
        answer_correct: answerCorrect,
        materia,
      };
  
      const res = await fetch('https://desarolhoweb-production.up.railway.app/api/post-questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(question),
      });
  
      const data = await res.json();
      console.log(data);
    }
    else if(action == 'read'){
      const res = await fetch(`https://desarolhoweb-production.up.railway.app/api/get-questions/${materia}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await res.json();
      setData(data);
      console.log(data);
    }
  };



  return (
    <>
    <div className={styles.mainContainer}>

    <div className={styles.leftContainer}>
        <div className={styles.formCard}>
          <div className={styles.buttonContainer}>
            <button className={styles.formsButton} onClick={() => setAction('create')}>Create</button>
            <button className={styles.formsButton} onClick={() => setAction('read')}>Read</button>
            <button className={styles.formsButton} onClick={() => setAction('update')}>Update</button>
            <button className={styles.formsButton} onClick={() => setAction('delete')}>Delete</button>
          </div>
          <h2>{action.charAt(0).toUpperCase() + action.slice(1)} Question</h2>

          <form className={styles.valuesSection} onSubmit={handleSubmit}>
              
              {action === 'create' && <Create/>}

              {action === 'read' && <Read/>}

              {action === 'update' && <Update/>}

              {action === 'delete' && <Delete/>}

              <div className={styles.box}>
                <button className={styles.submitButton} type="submit">
                  Submit
                </button>
              </div>
            </form>
        </div>
      </div>


      <div className={styles.cardContainer}>
      <Link style={{textDecoration: 'none'}} href="https://fernandotenchipe.github.io/LearningLimbo/">
      <div className={styles.card}>
      <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Play Game!</p>
            </div>
            
      </div>

      </Link>

        

      </div>



    </div>


    </>
  );
};

export default Quizzes;