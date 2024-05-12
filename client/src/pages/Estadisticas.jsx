import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import axios from 'axios';

export function Estadisticas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get-alumnos')
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <Container>
      <h1>Estadistica</h1>
      <table>
        <thead>
          <tr>
            <th>Alumnos</th>
            <th>Grado</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.alumnos}</td>
              <td>{row.grado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

const Container = styled.div`
  height:100vh;
`;