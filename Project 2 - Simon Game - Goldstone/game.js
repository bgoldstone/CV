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
// user and computer patterns
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
  // fade and plays sound in new sequence
  let offset = 750;
  const run = (colorIndex) => {
    if (gamePattern.length == colorIndex && gamePattern.length != 1) {
      return;
    }
    setTimeout(() => {
      $(`#${gamePattern[colorIndex]}`).fadeOut(250).fadeIn(250);
      playButtonSound(gamePattern[colorIndex]);
      return run(colorIndex + 1);
    }, 500);
  };
  run(0);
}

/**
 * Handles User interaction with buttons
 * @param {Event} e
 */
function clickHandler(e) {
  //gets color name
  let userChosenColor = e.target.id;
  // plays sound
  playButtonSound(userChosenColor);
  // animates press
  animatePress(userChosenColor);
  // adds to user's choices list
  userClickedPattern.push(userChosenColor);
  //checks answers
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
  // if full pattern not met, then keep going until whole sequence has been entered.
  if (userClickedPattern.length !== gamePattern.length) {
    return;
  }
  // compares sequence against user sequence.
  if (gamePattern.toString() === userClickedPattern.toString()) {
    userClickedPattern = [];
    console.log("Success");
    setTimeout(() => newSequence(), 1000);
    // Else, wrong sequence and reset game.
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

/**
 * Setups an event listener to start the game
 */
function eventListener() {
  document.addEventListener("keydown", addKeydownListener);
}
// keydown event listener
function addKeydownListener() {
  startOver();
  startGame();
}

eventListener();
