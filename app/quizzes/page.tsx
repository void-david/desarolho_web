'use client';
import React, { useState } from 'react';
import styles from '@/styles/quizzes.module.css'
import Link from 'next/link'


 const Quizzes = () =>{
  const [action, setAction] = useState('create');
  const [description, setDescription] = useState('');
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');
  const [answer4, setAnswer4] = useState('');
  const [answerCorrect, setAnswerCorrect] = useState('');
  const [materia, setMateria] = useState('');
   
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
    const res = await fetch('http://localhost:3001/api/get-materias', {
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
  
      const res = await fetch('http://localhost:3001/api/post-questions', {
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
      const res = await fetch(`http://localhost:3001/api/get-questions/${materia}`, {
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
              {action === 'create' && (
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
              )}

              {action === 'read' && (
              <>
                <div className={styles.smallText}>Read the questions of a course </div>
                <div className={styles.box}>
                <input
                      type="text"
                      id="materia"
                      value={materia}
                      onChange={(e) => setMateria(e.target.value)}
                      placeholder="Course"
                />
                  
                  <div>
                  <p>{`ID: ${data[0].id}`}</p>
                  <p>{`Description: ${data[0].description}`}</p>
                  <p>{`Answer 1: ${data[0].answer_1}`}</p>
                  <p>{`Answer 2: ${data[0].answer_2}`}</p>
                  <p>{`Answer 3: ${data[0].answer_3}`}</p>
                  <p>{`Answer 4: ${data[0].answer_4}`}</p>
                  <p>{`Correct Answer: ${data[0].answer_correct}`}</p>
                  <p>{`Materia: ${data[0].materia}`}</p>
                  </div>  

                </div>
                </>
              )}

              {action === 'update' && (
                <>
                  <div className={styles.box}>
                    <select className={styles.selector} defaultValue="">
                      <option value="" disabled>Pick a Quiz</option>
                      <option value="quiz1">Quiz 1</option>
                      <option value="quiz2">Quiz 2</option>
                      <option value="quiz3">Quiz 3</option>
                    </select>

                  <select className={styles.selector} defaultValue="">
                    <option value="" disabled>Pick a Question</option>
                    
                        {/* Aqui los values deben de cambiar a lo de question creo? no se @david */}
                    <option value="quiz1">Question 1</option>
                    <option value="quiz2">Question 2</option>
                    <option value="quiz3">Question 3</option>
                    <option value="quiz3">Question 4</option>
                  </select>
                  </div>
                  <div className={styles.box}>
                    <input
                      type="text"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Update your question"
                    />
                  </div>
                  <div className={styles.box}>
                    <input
                      type="text"
                      id="answer1"
                      value={answer1}
                      onChange={(e) => setAnswer1(e.target.value)}
                      placeholder="Update Answer 1"
                    />
                  </div>
                  <div className={styles.box}>
                    <input
                      type="text"
                      id="answer2"
                      value={answer2}
                      onChange={(e) => setAnswer2(e.target.value)}
                      placeholder="Update Answer 2"
                    />
                  </div>
                  <div className={styles.box}>
                    <input
                      type="text"
                      id="answer3"
                      value={answer3}
                      onChange={(e) => setAnswer3(e.target.value)}
                      placeholder="Update Answer 3"
                    />
                  </div>
                  <div className={styles.box}>
                    <input
                      type="text"
                      id="answer4"
                      value={answer4}
                      onChange={(e) => setAnswer4(e.target.value)}
                      placeholder="Update Answer 4"
                    />
                  </div>
                  <div className={styles.box}>
                    <input
                      type="text"
                      id="answerCorrect"
                      value={answerCorrect}
                      onChange={(e) => setAnswerCorrect(e.target.value)}
                      placeholder="Update Correct Answer"
                    />
                  </div>
                  <div className={styles.box}>
                    <input
                      type="text"
                      id="materia"
                      value={materia}
                      onChange={(e) => setMateria(e.target.value)}
                      placeholder="Update Course"
                    />
                  </div>
                </>
              )}

              {action === 'delete' && (
                <div className={styles.box}>
                  <select className={styles.selector} defaultValue="">
                    <option value="" disabled>Pick a Quiz</option>
                    <option value="quiz1">Quiz 1</option>
                    <option value="quiz2">Quiz 2</option>
                    <option value="quiz3">Quiz 3</option>
                  </select>


                
                  <select className={styles.selector} defaultValue="">
                    <option value="" disabled>Pick a Question</option>

                        {/* Aqui los values deben de cambiar a lo de question creo? no se @david */}
                    <option value="quiz1">Question 1</option>
                    <option value="quiz2">Question 2</option>
                    <option value="quiz3">Question 3</option>
                    <option value="quiz3">Question 4</option>
                  </select>

                </div>
              )}
              <div className={styles.box}>
                <button className={styles.submitButton} type="submit">
                  Submit
                </button>
              </div>
            </form>



          
        </div>
      </div>


      <div className={styles.cardContainer}>
      <Link style={{textDecoration: 'none'}} href="/game">
      <div className={styles.card}>
      <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 1</p>
              <p>Some description about the quiz</p>
            </div>
            
      </div>

  </Link>

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 2</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

        <Link style={{textDecoration: 'none'}} href="/game">
          <div className={styles.card}>

            <div className={styles.cardImage}></div>
            <div className={styles.cardContent}>
              <p>Quiz 3</p>
              <p>Some description about the quiz</p>
            </div>


          </div>
        </Link> 

      </div>



    </div>


    </>
  );
};

export default Quizzes;