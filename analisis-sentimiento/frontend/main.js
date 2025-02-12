import './style.css'
import {  handleButtonClick  } from './counter.js'
document.querySelector('#app').innerHTML = `
  <div>
  <h1>NeuroMinda</h1>
  <div id="messages"></div>
  
  <input type="text" id="inputText" placeholder="How are you...?">
  <div id="geminiMessage"></div> <!-- Nuevo div para mostrar el mensaje de respuesta --> </div>
  
  <button id="sendButton" >Send</button>
  <div id="responseMessage"></div> <!-- Nuevo div para mostrar el mensaje de respuesta -->
  
  <p class="read-the-docs">
    Please Let me help you here
  </p>
`

handleButtonClick();