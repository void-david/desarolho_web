'use client';
import React, { useState } from 'react';

function CreateQuestion() {
  const [pregunta, setText1] = useState('');
  const [R1, setText2] = useState('');
  const [R2, setText3] = useState('');
  const [R3, setText4] = useState('');
  const [R4, setText5] = useState('');
  const [RCorrecta, setText6] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(pregunta, R1, R2, R3, R4, RCorrecta);
  }

  const handleReset = () => {
    setText1('');
    setText2('');
    setText3('');
    setText4('');
    setText5('');
    setText6(''); 
  }
  
  const questionStyle = { width: '80%', height: '40px' };
  const inputStyle = { width: '40%', height: '40px' };
  const buttonStyle = { width: '80px', height: '30px' };
  
  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
      <input type="text" value={pregunta} onChange={(e) => setText1(e.target.value)} placeholder="Crea tu pregunta" style={questionStyle} />
      <input type="text" value={R1} onChange={(e) => setText2(e.target.value)} placeholder="Respuesta 1" style={inputStyle} />
      <input type="text" value={R2} onChange={(e) => setText3(e.target.value)} placeholder="Respuesta 2" style={inputStyle} />
      <input type="text" value={R3} onChange={(e) => setText4(e.target.value)} placeholder="Respuesta 3" style={inputStyle} />
      <input type="text" value={R4} onChange={(e) => setText5(e.target.value)} placeholder="Respuesta 4" style={inputStyle} />
      <input type="text" value={RCorrecta} onChange={(e) => setText6(e.target.value)} placeholder="Respuesta correcta" style={inputStyle} />
      <select onChange={(e) => setText5(e.target.value)} style={inputStyle}>
        <option value="">Select...</option>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <button type="submit" style={buttonStyle}>Submit</button>
      <button type="button" onClick={handleReset} style={buttonStyle}>Reset</button>
    </form>
  );
};

export default CreateQuestion;