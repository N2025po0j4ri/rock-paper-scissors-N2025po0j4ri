// Elements
const welcomeScreen = document.getElementById('welcome-screen');
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button');
const userNameInput = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// Instantiate game (declared but not initialized)
let game;

// Hide game screen initially
gameScreen.classList.add('d-none');

// Start Game Button Event Listener
startGameButton.addEventListener('click', function (e) {
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
  
});

// If you're doing the extra-credit, uncomment the below: reset-game-button
// resetGameButton.addEventListener(`click`, function(e) { 
  
// });