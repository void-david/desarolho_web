// pages/generate-story.js
'use client';
import { useState, useEffect } from 'react';
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function GenerateStory() {
  const [story, setStory] = useState('');

  useEffect(() => {
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);

    async function fetchStory() {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = "Write a story about a magic backpack.";
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = await response.text();
        setStory(text);
      } catch (error) {
        console.error('Error generating story:', error);
      }
    }

    fetchStory();
  }, []);

  return (
    <div>
      <h1>Generated Story</h1>
      <p>{story}</p>
    </div>
  );
}
