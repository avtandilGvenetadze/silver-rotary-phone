const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
const dinnerGif = document.querySelector(".dinner-gif");
const arowGif = document.querySelector(".arow-gif");
const question = document.querySelector(".question");
const tryAgain = document.querySelector(".try-again");
const wellDone = document.querySelector(".well-done");





yes.addEventListener("click", () => {
  yes.style.display = "none";
  no.style.display = "none";
  dinnerGif.style.display = "none";
  question.style.display = "none";
  arowGif.style.display = "block";
  wellDone.style.display = "block";
});

no.addEventListener("mouseover", () => {
  var maxX = (window.innerWidth - no.offsetWidth) / 3.3;
  var maxY = (window.innerHeight - no.offsetHeight) / 3.3;
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);
  no.style.left = randomX + "px";
  no.style.top = randomY + "px";
  changeButtonText();
});

no.addEventListener("click", () => {
  var maxX = (window.innerWidth - no.offsetWidth) / 3;
  var maxY = (window.innerHeight - no.offsetHeight) / 3;
  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);
  no.style.left = randomX + "px";
  no.style.top = randomY + "px";
  changeButtonText();
});

let buttonTexts = [
  "ხატიაა!",
  "მეორედ აღარ გთხოვ!",
  "ცუდი გოგო ხარ!",
  "გეყოს!",
  "ნათიას ვეტყვი!",
];

function changeButtonText() {
  var randomIndex = Math.floor(Math.random() * buttonTexts.length);
  no.textContent = buttonTexts[randomIndex];
}

tryAgain.addEventListener("click", () => {
  window.location.reload();
});
