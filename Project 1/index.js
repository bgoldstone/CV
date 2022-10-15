// Random number function between 1 and 6
let randomNum = () => Math.floor(Math.random() * 6) + 1;
let setImg = (querySelector, number) => {
  querySelector.src = `images/dice-${number}.png`;
};
let getOffset = () => {
  offset = offset + 250;
  return offset;
};
// Image elements
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
setImg(img1, randomNum());
setImg(img2, randomNum());
// Win Text
let winText = document.querySelector("#win-text");

// Random roll for each player
let player1 = randomNum();
let player2 = randomNum();
let offset = 0;
window.onload = () => {
  // Sets images
  // Generates random dice effect
  for (let index = 0; index < 10; index++) {
    setTimeout(() => {
      setImg(img1, randomNum());
      setImg(img2.randomNum());
    }, getOffset());
  }
  // Sets actual dice value
  setTimeout(() => {
    setImg(img1, player1);
    setImg(img2, player2);
    console.log(player1, player2);
  }, getOffset());
  // Chooses display text
  setTimeout(() => {
    if (player1 === player2) {
      winText.innerHTML = "It's a Tie!";
    } else if (player1 > player2) {
      winText.innerHTML = "Player 1 wins!";
    } else {
      winText.innerHTML = "Player 2 wins!";
    }
  }, getOffset());
};
