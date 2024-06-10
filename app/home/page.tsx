'use client';
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from 'react';

import React from 'react'
import styles from '@/styles/home.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar, Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  type Answer = {
    id: number;
    certainty: string;
    numCorrect: string;
    numIncorrect: string;
    score: string;
  };
  

export default function Home() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [answers, setAnswers] = useState<Answer[]>([]);
    const getAnswers = async () => {
        const res = await fetch('https://desarolhoweb-production.up.railway.app/api/get-answers', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await res.json();
        setAnswers(data);
        console.log(data);
      };
  
      useEffect(() => {
        // Fetch questions when component mounts
        getAnswers();
      }, []);

  return (
    <>
        <div className={styles.background}>
            <div className={styles.mainContainer}>
                <div className={styles.header}>
                    <h2>Welcome, {user?.firstName} {user?.lastName}!</h2>
                </div>

                <div className={styles.subHeader}>
                    Last (4) quiz certainty levels:
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.leftCardContainer}>
                    {answers.slice(-4).map((answer, index) => (
                        <div key={index} className={styles.card}>
                            <p>Certainty:</p>
                            <h1>{answer.certainty}%</h1>
                            <p>Quiz {index + 1}</p>
                        </div>
                        ))}
                    </div>
                    
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.bigCard}>
                        <div className={styles.feedbackHeader}>
                            <h2>Give your feedback</h2>
                        </div>

                        <div className={styles.feedbackWritingSpace}>
                            <textarea
                                className={styles.feedbackTextarea}
                                placeholder="Write here your feedback"
                            ></textarea>
                        </div>

                        <button className={styles.submitButton} onClick={() => alert('Feedback submitted')}> Submit </button>


                    </div>
                    <div className={styles.rightCardContainer}>
                    <div className={styles.card}>
                      <div className={styles.stats}>
                        <Bar
                          data={{
                            labels: ['Quiz1', 'Quiz2', 'Quiz3', 'Quiz4'],
                            datasets: [
                              {
                                label: 'Correct Answers',
                                data: answers.map(answer => parseInt(answer.numCorrect)),
                                backgroundColor: 'rgba(49,0,185,0.5)',
                              },
                            ],
                          }}
                        />
                      </div>
                    </div>

                    <div className={styles.card}>
                      <div className={styles.stats}>
                        <Bar
                          data={{
                            labels: ['Quiz1', 'Quiz2', 'Quiz3', 'Quiz4'],
                            datasets: [
                              {
                                label: 'Incorrect Answers',
                                data: answers.map(answer => parseInt(answer.numIncorrect)),
                                backgroundColor: 'rgba(255, 105, 180, 0.5)',
                              },
                            ],
                          }}
                        />
                      </div>
                    </div>
                    </div>

                    <div className={styles.bigCard}>
                        <h2>Become a Teacher!</h2>
                        <p>Do you want to become a teacher? We have a program for you!</p>
                        <p>Please contact us at</p>
                        <h3>learninglimbo@gmail.com</h3>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}


