function whosPaying(names) {
  return names[Math.floor(Math.random() * names.length)];
}
let names = ["Kim", "Ben", "Jenna", "Michael", "Chloe"];
console.log(`${whosPaying(names)} is paying!`);
