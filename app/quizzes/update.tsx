import React, { useState } from 'react';
import styles from '@/styles/quizzes.module.css'


const Update = () => {
    const [description, setDescription] = useState('');
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');
    const [answer4, setAnswer4] = useState('');
    const [answerCorrect, setAnswerCorrect] = useState('');
    const [materia, setMateria] = useState("Chemistry");
    
    return (
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
    );
}

export default Update;