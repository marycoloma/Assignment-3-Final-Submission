/********* create variables *********/
const daySelectors = document.querySelectorAll(".day-selector li");
const fullSelectButton = document.getElementById("full");
const halfSelectButton = document.getElementById("half");
const clearSelectButton = document.getElementById("clear-button");
const costSelectButton = document.getElementById("calculated-cost");

let dayCounter = 0;
let dailyCost = 35;

/********* colour change days of week *********/
daySelectors.forEach(function (day) {
  day.addEventListener("click", function () {
    if (!day.classList.contains("clicked")) {
      day.classList.add("clicked");
      dayCounter++;
      calculateCost();
    }
  });
});

/********* clear days *********/
clearSelectButton.addEventListener("click", function () {
  daySelectors.forEach(function (day) {
    day.classList.remove("clicked");
  });
  dayCounter = 0;
  calculateCost();
});

/********* change rate *********/
halfSelectButton.addEventListener("click", function () {
  dailyCost = 20;
  halfSelectButton.classList.add("clicked");
  fullSelectButton.classList.remove("clicked");
  calculateCost();
});

fullSelectButton.addEventListener("click", function () {
  dailyCost = 35;
  fullSelectButton.classList.add("clicked");
  halfSelectButton.classList.remove("clicked");
  calculateCost();
});

/********* calculate *********/
function calculateCost() {
  const total = dayCounter * dailyCost;
  costSelectButton.textContent = total;
}
