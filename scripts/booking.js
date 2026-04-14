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
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
