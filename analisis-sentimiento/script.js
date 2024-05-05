function sendText() {
    console.log('-->')
    const text = document.getElementById('inputText').value;
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
    }).then(data => {
        console.log(data)
    })
    // .then(response => response.json())
    // .then(data => {
    //     const sentimentMessage = getSentimentMessage(data);
    //     document.getElementById('result').innerHTML = 'Resultado: ' + sentimentMessage;
        
    //     // Mostrar mensaje de respuesta en el nuevo div
    //     document.getElementById('responseMessage').innerHTML = 'Mensaje de respuesta: ' + JSON.stringify(data);
    // })
    .catch(error => console.error('Error:', error));
}

function getSentimentMessage(sentimentData) {
    const compound = sentimentData.compound;
    if (compound > 0.05) {
        return "Positivo";
    } else if (compound < -0.05) {
        return "Negativo";
    } else {
        return "Neutral";
    }
}

const sendButton = document.querySelector('#sendButton'); // Cambio de #sendText a #sendButton

sendButton.addEventListener("click", () => {
    sendText();
});
/*
function sendText() {
    const text = document.getElementById('inputText').value;
    fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text })
    })
    .then(response => response.json())
    .then(data => {
        const sentimentMessage = getSentimentMessage(data);
        document.getElementById('result').innerHTML = 'Resultado: ' + sentimentMessage;
    })
    .catch(error => console.error('Error:', error));
}

function getSentimentMessage(sentimentData) {
    const compound = sentimentData.compound;
    if (compound > 0.05) {
        return "Positivo";
    } else if (compound < -0.05) {
        return "Negativo";
    } else {
        return "Neutral";
    }
}*/