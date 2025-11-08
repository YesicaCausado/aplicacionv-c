import './style.css'

// Respuestas de la Magic 8 Ball (traducción de las clásicas)
const answers = [
  // Positivas
  { text: "Sí, definitivamente", type: "positive", emoji: "✨" },
  { text: "Sin duda alguna", type: "positive", emoji: "💯" },
  { text: "Puedes confiar en ello", type: "positive", emoji: "🎯" },
  { text: "Es cierto", type: "positive", emoji: "✅" },
  { text: "Las señales apuntan a que sí", type: "positive", emoji: "🌟" },
  { text: "Parece que sí", type: "positive", emoji: "👍" },
  { text: "Todo indica que sí", type: "positive", emoji: "🚀" },
  { text: "Perspectivas buenas", type: "positive", emoji: "🎊" },
  { text: "Sí", type: "positive", emoji: "💚" },
  { text: "Cuenta con ello", type: "positive", emoji: "🌈" },
  
  // Neutras
  { text: "Pregunta de nuevo más tarde", type: "neutral", emoji: "⏰" },
  { text: "No puedo predecirlo ahora", type: "neutral", emoji: "�" },
  { text: "Mejor no decirte ahora", type: "neutral", emoji: "🤐" },
  { text: "Concéntrate y pregunta de nuevo", type: "neutral", emoji: "🧘" },
  { text: "No está claro, intenta de nuevo", type: "neutral", emoji: "🌀" },
  
  // Negativas
  { text: "No cuentes con ello", type: "negative", emoji: "⛔" },
  { text: "Mi respuesta es no", type: "negative", emoji: "❌" },
  { text: "Mis fuentes dicen que no", type: "negative", emoji: "📰" },
  { text: "Las perspectivas no son buenas", type: "negative", emoji: "😬" },
  { text: "Muy dudoso", type: "negative", emoji: "🤨" }
];

let questionCount = 0;
let isShaking = false;
let questionHistory = [];

// Crear la interfaz
document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <h1>🔮 MAGIC 8 BALL</h1>
      <p class="subtitle">Haz una pregunta y sacude la bola mágica</p>
    </header>

    <div class="ball-container">
      <div id="magicBall" class="magic-ball">
        <div class="ball-shine"></div>
        <div class="ball-shadow"></div>
        <div id="ballWindow" class="ball-window">
          <div class="window-triangle">8</div>
        </div>
        <div class="sparkles">
          <div class="sparkle"></div>
          <div class="sparkle"></div>
          <div class="sparkle"></div>
          <div class="sparkle"></div>
        </div>
      </div>
      <div class="shake-hint">👆 Click para sacudir</div>
    </div>

    <div class="question-section">
      <input 
        type="text" 
        id="questionInput" 
        placeholder="Escribe tu pregunta aquí... (ej: ¿Aprobaré el examen?)"
        maxlength="150"
      />
      <button id="askBtn" class="btn btn-primary">
        ✨ Preguntar a la Bola
      </button>
    </div>

    <div id="answerDisplay" class="answer-display hidden">
      <div class="answer-emoji">🔮</div>
      <div class="answer-text"></div>
    </div>

    <div class="history-section">
      <h3>📜 Historial de Preguntas</h3>
      <div id="historyList" class="history-list">
        <p class="empty-history">Aún no has hecho ninguna pregunta...</p>
      </div>
    </div>

    <div class="stats">
      <p class="question-count">Preguntas realizadas: <span id="questionCounter">0</span></p>
      <p class="tip">💡 <strong>Tip:</strong> Haz preguntas de sí o no para mejores resultados</p>
    </div>
  </div>
`;

// Función para sacudir la bola
function shakeBall() {
  if (isShaking) return;
  
  const ball = document.getElementById('magicBall');
  const window = document.getElementById('ballWindow');
  const questionInput = document.getElementById('questionInput');
  const question = questionInput.value.trim();
  
  if (!question) {
    alert('❓ Por favor escribe una pregunta primero');
    questionInput.focus();
    return;
  }
  
  isShaking = true;
  ball.classList.add('shaking');
  window.classList.add('thinking');
  
  // Ocultar respuesta anterior
  const answerDisplay = document.getElementById('answerDisplay');
  answerDisplay.classList.add('hidden');
  
  // Después de 2 segundos, mostrar respuesta
  setTimeout(() => {
    const answer = answers[Math.floor(Math.random() * answers.length)];
    showAnswer(answer, question);
    
    ball.classList.remove('shaking');
    window.classList.remove('thinking');
    isShaking = false;
    
    // Limpiar input
    questionInput.value = '';
    questionInput.focus();
    
    // Actualizar contador
    questionCount++;
    document.getElementById('questionCounter').textContent = questionCount;
    
    // Agregar al historial
    addToHistory(question, answer);
  }, 2000);
}

// Mostrar respuesta
function showAnswer(answer, question) {
  const answerDisplay = document.getElementById('answerDisplay');
  const answerText = answerDisplay.querySelector('.answer-text');
  const answerEmoji = answerDisplay.querySelector('.answer-emoji');
  
  // Configurar color según tipo
  answerDisplay.className = 'answer-display';
  answerDisplay.classList.add(`answer-${answer.type}`);
  
  answerText.textContent = answer.text;
  answerEmoji.textContent = answer.emoji;
  
  // Mostrar con animación
  setTimeout(() => {
    answerDisplay.classList.remove('hidden');
  }, 100);
  
  // Actualizar la ventana de la bola
  const window = document.getElementById('ballWindow');
  window.innerHTML = `<div class="window-triangle">${answer.emoji}</div>`;
}

// Agregar al historial
function addToHistory(question, answer) {
  questionHistory.unshift({ question, answer, timestamp: new Date() });
  
  // Mantener solo las últimas 5
  if (questionHistory.length > 5) {
    questionHistory.pop();
  }
  
  updateHistoryDisplay();
}

// Actualizar display del historial
function updateHistoryDisplay() {
  const historyList = document.getElementById('historyList');
  
  if (questionHistory.length === 0) {
    historyList.innerHTML = '<p class="empty-history">Aún no has hecho ninguna pregunta...</p>';
    return;
  }
  
  historyList.innerHTML = questionHistory.map((item, index) => `
    <div class="history-item ${item.answer.type}">
      <div class="history-question">
        <strong>Q:</strong> ${item.question}
      </div>
      <div class="history-answer">
        <strong>${item.answer.emoji}</strong> ${item.answer.text}
      </div>
    </div>
  `).join('');
}

// Event Listeners
document.getElementById('magicBall').addEventListener('click', shakeBall);
document.getElementById('askBtn').addEventListener('click', shakeBall);

document.getElementById('questionInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    shakeBall();
  }
});

// Efecto parallax con el mouse
document.querySelector('.container').addEventListener('mousemove', (e) => {
  const ball = document.getElementById('magicBall');
  const rect = ball.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  
  const moveX = x / 30;
  const moveY = y / 30;
  
  if (!isShaking) {
    ball.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

document.querySelector('.container').addEventListener('mouseleave', () => {
  const ball = document.getElementById('magicBall');
  if (!isShaking) {
    ball.style.transform = 'translate(0, 0)';
  }
});

// Animación de las chispas
setInterval(() => {
  const sparkles = document.querySelectorAll('.sparkle');
  sparkles.forEach(sparkle => {
    sparkle.style.animation = 'none';
    setTimeout(() => {
      sparkle.style.animation = '';
    }, 10);
  });
}, 3000);
