import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <h1>Análisis de Sentimiento con Vader</h1>
  <input type="text" id="inputText" placeholder="Escribe algo aquí...">
  <button id="sendButton" >Analizar Sentimiento</button>
  <div id="result"></div>
  <div id="responseMessage"></div> <!-- Nuevo div para mostrar el mensaje de respuesta -->
  <div id="geminiMessage"></div> <!-- Nuevo div para mostrar el mensaje de respuesta -->
    <p class="read-the-docs">
      Busca ayuda Profesional
    </p>
  </div>
`

setupCounter(document.querySelector('#sendButton'))
