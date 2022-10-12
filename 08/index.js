let firstHeading = document.getElementsByTagName("h1")[0];
firstHeading.style.color = "red";
firstHeading.innerHTML = "Goodbye";
let listElementThree = document.getElementsByTagName("li")[2];
listElementThree.style.color = "green";
let btn = document.getElementsByTagName("button")[0];
btn.style.backgroundColor = "yellow";
let cb = document.getElementsByClassName("cb")[0];
document.getElementsByClassName("list")[0].firstChild.innerHTML =
  "Duck Duck Go";
document.querySelectorAll("li").forEach((element) => {
  element.style.color = "lightblue";
});
