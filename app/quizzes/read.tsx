import React, { useState } from 'react';
import styles from '@/styles/quizzes.module.css'

const Read = () => {
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
    
    return (
        <>
            <div className={styles.smallText}>Read the questions of a course </div>
            <div className={styles.box_read}>
                <input
                    type="text"
                    id="materia"
                    value={materia}
                    onChange={(e) => {
                        setMateria(e.target.value);
                    }}
                    placeholder="Course"
                />
                        
                {isGetSub && (
                    <div className={styles.boxButtons}>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button key={num} onClick={() => setPreg(num - 1)}>
                        {num}
                        </button>
                    ))}
                    </div>
                )}
                        
                <div>
                <p>{`ID: ${data[preg].id}`}</p>
                <p>{`Description: ${data[preg].description}`}</p>
                <p>{`Answer 1: ${data[preg].answer_1}`}</p>
                <p>{`Answer 2: ${data[preg].answer_2}`}</p>
                <p>{`Answer 3: ${data[preg].answer_3}`}</p>
                <p>{`Answer 4: ${data[preg].answer_4}`}</p>
                <p>{`Correct Answer: ${data[preg].answer_correct}`}</p>
                <p>{`Materia: ${data[preg].materia}`}</p>
                </div>

            </div>
        </>
    );
}

export default Read;