// Get element references
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.querySelector('#game-screen');
const startGameButton = document.getElementById('start-game-button');
const userNameInput = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');
const resetGameButton = document.getElementById('reset-game-button'); // Make sure this exists in your HTML

// Game instance
let game;

// Hide game screen initially
gameScreen.classList.add('d-none');

// Update score UI
function updateScoreTallyUI() {
  if (!game || !game.username || !game.score) return;

  const username = game.username;
  const userScore = game.score.user;
  const cpuScore = game.score.cpu;

  scoreParagraph.textContent = `${username}: ${userScore}  v  CPU: ${cpuScore}`;
}

// Update game history UI
function updateGameHistoryUI() {
  if (!game || !Array.isArray(game.gameHistoryLog)) return;

  // Clear history
  gameHistoryParagraph.innerHTML = '';

  // Add log entries
  game.gameHistoryLog.forEach(entry => {
    const p = document.createElement('p');
    p.textContent = entry;
    gameHistoryParagraph.appendChild(p);
  });
}

// Start game button click handler
startGameButton.addEventListener('click', function (event) {
  event.preventDefault();

  const username = userNameInput.value.trim();

  if (!username) {
    alert("Please enter your name to start the game.");
    return;
  }

  game = new RockPaperScissors(username);

  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');

  updateScoreTallyUI();
  updateGameHistoryUI();
});

// Go button click handler
goButton.addEventListener('click', function (event) {
  event.preventDefault();

  const selection = userSelection.value;
  game.play(selection);

  updateScoreTallyUI();
  updateGameHistoryUI();
});

// Optional: Reset button handler
if (resetGameButton) {
  resetGameButton.addEventListener('click', function (e) {
    e.preventDefault();

    userNameInput.value = '';
    game = null;

    gameScreen.classList.add('d-none');
    welcomeScreen.classList.remove('d-none');

    scoreParagraph.textContent = '';
    gameHistoryParagraph.textContent = '';
  });
}
