const express = require('express');
const vader = require('vader-sentiment');
const cors = require('cors');
require('dotenv').config()

const { run } = require('./gemini')

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
        const text = req.query.text; 
        const respGemini = await run(text);
        res.status(200).send({"g_response": respGemini})
    } catch (error) {
        console.log(error);
        res.status(500).send("No siempre")
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;