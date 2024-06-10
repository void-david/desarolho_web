'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import { get } from 'http';
import styles from '@/styles/clases.module.css';


interface Clase {
  id: number;
  clase: string;
  maestro: string;
}
interface Alumno {
    id: number
    clase: string;
    alumno: string;
    }

const Clases = () => {
  const { user } = useUser();
  const [clases, setClases] = useState<Clase[]>([]);
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);

  const crearAlumno = async (clase: string, alumno: string) => {
    const res = await fetch('https://desarolhoweb-production.up.railway.app/api/crear-alumno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clase, alumno }),
    });
  
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Error creating student');
    }
  };

  const crearClase = async (clase: string, maestro: string) => {
    const res = await fetch('https://desarolhoweb-production.up.railway.app/api/crear-clase', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clase, maestro }),
    });
  
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Error creating class');
    }
  }
  


  const getClases = async () => {
    const res = await fetch('https://desarolhoweb-production.up.railway.app/api/get-clases', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setClases(data);
  };

  const getAlumnos = async () => {
    const res = await fetch('https://desarolhoweb-production.up.railway.app/api/get-alumnos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setAlumnos(data);
  }
  //function deleteLastClass() 
   
  const deleteLastClass = async () => {
    const res = await fetch('https://desarolhoweb-production.up.railway.app/api/delete-last-clase', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      throw new Error('Error deleting class');
    }
  }

  useEffect(() => {
    getClases();
    getAlumnos();
  }, []);

  return (
    <main className={styles.mainContainer}>
      <div className={styles.tableSection}>
      {clases.map((clase) => (
        <div className={styles.bigCard} key={clase.id}>
          <h2>{clase.clase}</h2>
          <p>Teacher: {clase.maestro}</p>
          <h3>Students:</h3>
          {alumnos
              .filter(alumno => alumno.clase === clase.clase)
              .map((alumno) => (
              <div key={alumno.id}>
                  <p>{alumno.alumno}</p>
              </div>
              ))
          }
          <button className={styles.submitButton} 
          onClick={() => {
            crearAlumno(clase.clase, user && user.firstName ? user.firstName : 'Unknown')
            getAlumnos();
            }}>
            Join this class!
          </button>
        </div>
      ))}

      <div className={styles.bigCard}>
        <h2>Create a new class</h2>
        <div className={styles.box}>
          <input  type="text" id="new-class" autoComplete='off'/>
        </div>

        <button className={styles.submitButton}
          onClick={() => {
            const newClass = document.getElementById('new-class') as HTMLInputElement;
            if (newClass) {
              crearClase(newClass.value, user && user.firstName ? user.firstName : 'Unknown');
                getClases();
            }
            }}>
            Add new class
        </button>
      </div>

      <div className={styles.bigCard}>
        <h2>Delete last class</h2>
        <button className={styles.submitButton}
          onClick={() => {
            deleteLastClass();
            getClases();
          }}>
          Delete last class
      </button>
      </div>
      </div>


    
    </main>
  );
};

export default Clases;