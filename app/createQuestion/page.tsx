'use client';
import React, { useState } from 'react';
function CreateQuestion() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(text1, text2, text3, text4, text5, text6);
  }

  const handleReset = () => {
    setText1('');
    setText2('');
    setText3('');
    setText4('');
    setText5('');
    setText6(''); 
  }
  const inputStyle = { width: '30%' };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      <input type="text" value={text1} onChange={(e) => setText1(e.target.value)} placeholder="Crea tu pregunta" style={inputStyle} />
      <input type="text" value={text2} onChange={(e) => setText2(e.target.value)} placeholder="Respuesta 1" style={inputStyle} />
      <input type="text" value={text3} onChange={(e) => setText3(e.target.value)} placeholder="Respuesta 2" style={inputStyle} />
      <input type="text" value={text4} onChange={(e) => setText4(e.target.value)} placeholder="Respuesta 3" style={inputStyle} />
      <input type="text" value={text5} onChange={(e) => setText5(e.target.value)} placeholder="Respuesta 4" style={inputStyle} />
      <input type="text" value={text6} onChange={(e) => setText6(e.target.value)} placeholder="Respuesta correcta" style={inputStyle} />
      <button type="submit">Enviar</button>
      <button type="button" onClick={handleReset}>Reset</button>
    </form>
  );
}

export default CreateQuestion;