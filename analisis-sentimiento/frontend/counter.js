
export async function analyzeText(text) {
    try {
      const response = await axios.post('http://localhost:3001/analyze', { text });
      return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al analizar el texto");
    }
}

export async function getModelResponseAndSentiment(text) {
    try {
        const sentimentResponse = await analyzeText(text);
        const response = await axios.get('http://localhost:3001/model_response', {
            params: { text }
        });
        return {
            sentiment: sentimentResponse,
            modelResponse: response.data.g_response
            
        };
    } catch (error) {
        console.error(error);
    }
}
function getSentimentLabel(sentiment) {
  // Extraer el valor del sentimiento (compound) del objeto JSON
  const compound = sentiment.compound;

  // Determinar la etiqueta basada en el valor del compound
  if (compound >= 0.05) {
    return 'happy';
  } else if (compound <= -0.05) {
    return 'sad';
  } else {
    return 'normal';
  }
}
export function handleButtonClick() {
  const sendButton = document.getElementById('sendButton');
  const inputText = document.getElementById('inputText');
  const responseMessage = document.getElementById('responseMessage');
  sendButton.addEventListener('click', async () => {
      try {
          const { sentiment, modelResponse } = await getModelResponseAndSentiment(inputText.value);
         // responseMessage.innerHTML = `Vader: ${JSON.stringify(sentiment)} <br> Mentor: ${modelResponse}`;
          responseMessage.innerHTML = `Vader: ${getSentimentLabel(sentiment)} <br> Mentor: ${modelResponse}`;
          console.log('-->')
      } catch (error) {
          console.error(error);
          responseMessage.innerHTML = "Error al procesar la solicitud";
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const messagesDiv = document.getElementById('messages');
  const inputText = document.getElementById('inputText');
  const sendButton = document.getElementById('sendButton');

  sendButton.addEventListener('click', () => {
    const message = inputText.value.trim();
    if (message !== '') {
      sendMessage(message);
      inputText.value = '';
    }
  });

  function sendMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add('message', 'sent');
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});