let buttons = document.querySelectorAll(".drum");
let audioFiles = [
  "sounds/crash.mp3",
  "sounds/kick-bass.mp3",
  "sounds/snare.mp3",
  "sounds/tom-1.mp3",
  "sounds/tom-2.mp3",
  "sounds/tom-3.mp3",
  "sounds/tom-4.mp3",
  "sounds/tom-4.mp3",
];
let audio = [];
for (let audioFile in audioFiles) {
  audio.push(new Audio(audioFiles[audioFile]));
}
for (let btn in buttons) {
  buttons[btn].addEventListener("click", () => {
    audio[btn].play();
    this.style.color = "blue";
  });
  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "KeyW":
        audio[0].play();
        break;
      case "KeyA":
        audio[1].play();
        break;
      case "KeyD":
        audio[2].play();
        break;
      case "KeyJ":
        audio[3].play();
        break;
      case "KeyK":
        audio[4].play();
        break;
      case "KeyL":
        audio[5].play();
        break;
    }
  });
}
