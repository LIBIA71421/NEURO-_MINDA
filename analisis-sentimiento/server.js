const express = require('express');
const vader = require('vader-sentiment');

const app = express();
const port = process.env.PORT || 5500;

app.use(express.json());

app.post('/analyze', (req, res) => {
    console.log('-->')
    const { text } = req.body;
    const result = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    res.json(result);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});