'use client';

import React from 'react'
import styles from '@/styles/statistics.module.css'
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


function statistics() {
  return (
    
    <>
    
    <div className={styles.mainContainer}>
    <div className={styles.leftContainer}>
        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <h1>Statistics</h1>
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


        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <h1>Statistics</h1>
            <Line
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


        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <h1>Statistics</h1>
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


        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <h1>Statistics</h1>
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


        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <h1>Statistics</h1>
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

        <div className={styles.statsContainer}>
          <div className={styles.stats}>
            <h1>Statistics</h1>
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

      
      <div className={styles.rightContainer}>
              <div className={styles.statsContainer}>
                <h1> Estadistica 1</h1>
                <p> 123,457</p>
              </div>
              <div className={styles.statsContainer}>
                <h1> Estadistica 2</h1>
                <p> 123,457</p>
              </div>
        </div>
    </div>

    </>
    
  )
}

export default statistics