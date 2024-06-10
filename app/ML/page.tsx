'use client';
import { useState } from 'react';
import Markdown from 'react-markdown'
import styles from '@/styles/home.module.css';
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
    <div className={styles.mainContainer}>
      <div className={styles.cardContainer}>
        <div className={styles.bigCard}>
          <h2>Learning Limbo GPT</h2>
          <div className={styles.feedbackWritingSpace}>
            <textarea className={styles.feedbackTextarea} 
            placeholder="Ask me anything."
            name ="" id=""cols={50} rows ={10} onChange={handleChange} />
          </div>
          
          <button className={styles.submitButton} onClick={handleKey}>Submit</button>
          <div className={styles.result}>
            <Markdown>{result}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;