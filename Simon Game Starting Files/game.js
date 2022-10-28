const buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;

// array of htmlButtons
const htmlButtons = {};
buttonColors.forEach((color) => {
  htmlButtons[color] = $(`#${color}`);
});
// Maps Sounds
const sounds = {};
buttonColors.forEach((color) => {
  sounds[color] = new Audio(`sounds/${color}.mp3`);
});
const wrong = new Audio(`./sounds/wrong.mp3`);
let gamePattern = [];
let userClickedPattern = [];
// Sets Event handlers
$(".btn").click((e) => {
  clickHandler(e);
});
/**
 * Gets a new sequence for the user
 */
function newSequence() {
  level++;
  $("#level-title").text(`Level ${level}`);
  // Generate new random color and display for the user
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  for (const color of gamePattern) {
    $(`#${color}`).fadeOut(250).fadeIn(250);
    playButtonSound(color);
  }
}

/**
 * Handles User interaction with buttons
 * @param {Event} e
 */
function clickHandler(e) {
  //gets color name
  let userChosenColor = e.target.id;
  playButtonSound(userChosenColor);
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor);
  checkAnswer();
}

/**
 * Plays sound of a button
 * @param {String} color
 */
function playButtonSound(color) {
  sounds[color].play();
}

/**
 * Animates button press
 * @param {String} currentColor
 */
function animatePress(currentColor) {
  htmlButtons[currentColor].addClass("pressed");
  setTimeout(() => {
    htmlButtons[currentColor].removeClass("pressed");
  }, 100);
}

/**
 * Checks generated sequence against user sequence
 * @returns void
 */
function checkAnswer() {
  if (userClickedPattern.length !== gamePattern.length) {
    return;
  }
  if (gamePattern.toString() === userClickedPattern.toString()) {
    userClickedPattern = [];
    console.log("Success");
    setTimeout(() => newSequence(), 1000);
  } else {
    console.log("Wrong");
    wrong.play();
    $("body").addClass("game-over");
    startOver();
    setTimeout(() => {
      $("body").removeClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");
    }, 200);
    eventListener();
  }
}
/**
 * Function to start the game.
 */
function startGame() {
  // Removes event Listener to prevent user from restarting the game accidentally.
  document.removeEventListener("keydown", addKeydownListener);
  newSequence();
}

/**
 * Function to reset the game.
 */
function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
}

// Checks for keydown events
function eventListener() {
  document.addEventListener("keydown", addKeydownListener);
}
// keydown event listener
function addKeydownListener() {
  startOver();
  startGame();
}

eventListener();
