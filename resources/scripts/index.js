// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById(`game-screen`);
const startGameButton = document.getElementById(`start-game-button`);
const userName = document.getElementById(`username`);
const userSelection = document.getElementById(`user-selection`);
const goButton = document.getElementById(`go-button`);
const scoreParagraph = document.getElementById(`score-tally`);
const gameHistoryParagraph = document.getElementById(`game-history`);

// instantiate the game object from the `RockPaperScissors` class.
let game;

// hide game screen
gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI() {
  if (!game || !game.username || !game.score) return;

  const username = game.username;
  const userScore = game.score.user;
  const cpuScore = game.score.cpu;

  scoreParagraph.textContent = `${username}: ${userScore}  v  CPU: ${cpuScore}`;
}


// updateGameHistoryUI
function updateGameHistoryUI() {
  if (!game || !Array.isArray(game.gameHistoryLog)) return;

  // Clear current history
  gameHistoryParagraph.textContent = '';

  // Add each log entry from gameHistoryLog to the paragraph
  game.gameHistoryLog.forEach(entry => {
    const p = document.createElement('p');
    p.textContent = entry;
    gameHistoryParagraph.appendChild(p);
  });
}


// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  e.preventDefault(); // prevent form submission

  // a. Get username from input
  const username = userNameInput.value.trim();

  // optional: validate input
  if (!username) {
    alert("Please enter your name to start the game.");
    return;
  }

  // b. Instantiate game object
  game = new RockPaperScissors(username);

  // c. Hide welcome screen and show game screen
  welcomeScreen.classList.add('d-none');
  gameScreen.classList.remove('d-none');
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  // Prevent form submission (since the button is in a <form>)
  event.preventDefault();

  // Get user selection from the dropdown
  const selection = userSelection.value;

  // Call the play method from the game object
  game.play(selection);

  // Update the score display
  updateScoreTallyUI();

  // Update the game history display
  updateGameHistoryUI();
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });