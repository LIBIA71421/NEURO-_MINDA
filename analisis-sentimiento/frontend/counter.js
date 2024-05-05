// import vader from 'vader-sentiment';

export function setupCounter(element) {
  
  const inputText = document.getElementById("inputText");
  element.addEventListener('click', async () => {
    
    try {
      const response = await axios.get('http://localhost:3001/model_response',{
        params: {
          text: inputText.value //+ gemini(inputText)
        }
      })
      const mensajeRespuesta = document.querySelector('#geminiMessage').innerHTML = response.data.g_response;
      
    } catch (error) {
      console.log(error);
      
    }
    // TODO: Redo with axios
     //const result = vader.SentimentIntensityAnalyzer.polarity_scores(input);
     //console.log(input, result)
     //document.getElementById('responseMessage').innerHTML = getSentimentMessage(result);
     //gemini(input);
  })
  
  
}

// function gemini(textTalk){
//   debugger;
//   const genai = require('@google/generative-ai');
//   genai.configure({ apiKey: process.env.API_KEY });
//   const model = new genai.GenerativeModel('gemini-pro');
//   model.generateContent('quiero ayuda')
//     .then(response => {
//       debugger;
//       console.log(response.text)
//     })
//     .catch(error => console.error(error));
// }

// function getSentimentMessage(sentimentData) {
//   const compound = sentimentData.compound;
//   if (compound > 0.05) {
//       return "Positivo";
//   } else if (compound < -0.05) {
//       return "Negativo";
//   } else {
//       return "Neutral";
//   }
// }
