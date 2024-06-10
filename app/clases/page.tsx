'use client';
import React, { useEffect, useState } from 'react';
import { useUser } from "@clerk/clerk-react";
import { get } from 'http';


interface Clase {
  clase: string;
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
    const res = await fetch('http://localhost:3001/api/crear-alumno', {
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
    const res = await fetch('http://localhost:3001/api/crear-clase', {
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
    const res = await fetch('http://localhost:3001/api/get-clases', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setClases(data);
  };

  const getAlumnos = async () => {
    const res = await fetch('http://localhost:3001/api/get-alumnos', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setAlumnos(data);
  }

  useEffect(() => {
    getClases();
    getAlumnos();
  }, []);

  return (
    <div>
    {clases.map((clase, index) => (
      <div key={index}>
        <h2>{clase.clase}</h2>
        <p>Students:</p>
        {alumnos
            .filter(alumno => alumno.clase === clase.clase)
            .map((alumno) => (
            <div key={alumno.id}>
                <p>{alumno.alumno}</p>
            </div>
            ))
        }
        <button onClick={() => crearAlumno(clase.clase, user && user.firstName ? user.firstName : 'Unknown')}>
          Join this class!
        </button>
      </div>
    ))}

    <h2>Create a new class</h2>
    <input type="text" id="new-class" />
    <button
      onClick={() => {
        const newClass = document.getElementById('new-class') as HTMLInputElement;
        if (newClass) {
          crearClase(newClass.value, user && user.firstName ? user.firstName : 'Unknown');
            getClases();
        }
        }}>
        Add new class
    </button>

    <div>
  
</div>

    
  </div>
  );
};

export default Clases;