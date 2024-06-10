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
        const res = await fetch('http://localhost:3001/api/get-answers', {
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
                    <h2>Welcome, {user?.firstName}!</h2>
                </div>

                <div className={styles.subHeader}>
                    You have (3) quizzes waiting for completion.
                </div>

                <div className={styles.cardContainer}>
                    <div className={styles.leftCardContainer}>
                        <div className={styles.card}>
                            <h1>78%</h1>
                            <p>Matematicas</p>
                        </div>
                        <div className={styles.card}>
                            <h1>89%</h1>
                            <p>Física</p>
                        </div>
                        <div className={styles.card}>
                            <h1>100%</h1>
                            <p>Química</p>
                        </div>
                    </div>
                    <div className={styles.rightCardContainer}>
                        <div className={styles.roundCard}>
                            <h1>89%</h1>
                        </div>
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

                        <button className={styles.submitButton}> Submit </button>

                    </div>
                    <div className={styles.rightCardContainer}>
                        <div className={styles.card}>
                            <div className={styles.stats}>
                                <Bar
                                data={{
                                    labels: ['January', 'February', 'March'],
                                    datasets: [
                                    {
                                    label: 'My First Dataset',
                                    data: [65, 59, 80],
                                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                                    },
                                    {
                                    label: "Loss",
                                    data: [100,200,300],
                                    backgroundColor: 'rgba(49,0,185,0.5)',
                                    
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


