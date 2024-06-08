import React, { useState } from 'react';
import styles from '@/styles/quizzes.module.css'

const Delete = () => {

    return (
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
    );
}

export default Delete;