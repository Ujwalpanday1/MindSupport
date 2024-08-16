import axios from "axios";
import { configDotenv } from "dotenv";
import puppeteer from "puppeteer";
import { GoogleGenerativeAI } from "@google/generative-ai";

configDotenv();
const handleHome = async (req, res) => {
    const {input}=req.body;
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_AI_API);
  console.log(genAI);

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const sendApiRequest = async (prompt, retries = 5) => {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        console.log(text);
        return text; // Return the response text instead of sending it directly
      } catch (error) {
        console.error(`Attempt ${i + 1} failed:`, error.errorDetails[0].reason);
        if (i === retries - 1) {
          // If it's the last retry, send an error response
          return `Failed to generate content after ${retries} attempts.`;
        }
      }
    }
  };

  const prompt =
    `I'm sharing my thoughts with you, which could be about my day or how I'm feeling. If I'm feeling down or lost, please motivate me. Be a supportive friend, playful yet understanding. You should act  like krishna who is motivating me like i am a distressed and discouraged arjun donot call me arjun but treat like him and  share verses from the Gita in sanskrit and expalin in english without saying it translates to  say if you are the real krishna and relate them to my situation. user input is :${input}`;
  const generatedText = await sendApiRequest(prompt);

  res.send(generatedText);
};

export { handleHome };
