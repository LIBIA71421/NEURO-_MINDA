const express = require('express');

const vader = require('vader-sentiment');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 5500;

app.use(express.json());

app.use(cors());

app.post('/analyze', (req, res) => {
    console.log('-->')
    const { text } = req.body;
    const result = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    res.json(result);
});

app.get('/model_response', async (req, res) =>{    
    try {
         //const genai = require('@google/generative-ai');
         //genai.configure({ apiKey: process.env.API_KEY });
         //const model = new genai.GenerativeModel('gemini-1.5-pro-latest');
         //const response = await model.generateContent('hola como estas, quiero ayuda')
        res.status(200).send({"g_response":req.query.text})
    } catch (error) {
        console.log(error);
        res.status(500).send("No siempre")
    }
})

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


function gemini(textTalk){
  }