'use client';
import { useState } from 'react';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const Page = () => {  
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleKey = async () => {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const res = await model.generateContent(query);
      const response = await res.response;
      const text = await response.text();
      setResult(text);
    } catch (error) {
      console.error('Error generating content:', error);
    }
  };
  
  return(
    <div>
      <textarea name ="" id=""cols={50} rows ={10} onChange={handleChange} />
      <button onClick={handleKey}>Submit</button>
      <div>{result}</div>
    </div>
  );
};
export default Page