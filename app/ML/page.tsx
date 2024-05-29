'use client';
import {Configuration} from 'openai/dist/configuration';
import {OpenAIApi} from 'openai/dist/api';
import React, {useState} from 'react';

const Page = () => {  
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };

  const handleKey = async () => {
    const configuration = new Configuration({
      apiKey: process.env.NExt_PUBLIC_OPENAI_API,
    });

    const openAi = new OpenAIApi(configuration);

    const res = await openAi.createCompletion({
      model: 'text-davinci-003',
      prompt: query,
      max_tokens: 300,
      temperature: 1,
    });
    setResult(res.data.choices[0].text!);
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
