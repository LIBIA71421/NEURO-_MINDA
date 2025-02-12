const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = "AIzaSyC1bwivnVc63INxn0PLk6d8siM3R0D9kQI";
const genAI = new GoogleGenerativeAI(API_KEY);

async function run(text) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  
    const prompt = `Act like: an experienced psychologist and give me 1 advice about anxiety or depression(with out to say is a advice), which is related to the following phrase "${text}". IF detectec the word:depression add at the finish "I'll give you this phones: Dr Merida 78458996"`
  
    const result = await model.generateContent(prompt);
    const response = await result.response;
        
    return response.text();
}

module.exports = { run };