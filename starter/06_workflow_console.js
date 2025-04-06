// TODO: Create a function 'animateSteps' that logs one step from a list every second
// TODO: Use 'setTimeout' or 'setInterval' to log the steps in order

const steps = [
	"Step 1: Create empty cart",
	"Step 2: Add item to cart",
	"Step 3: Calculate total",
	"Step 4: Apply discount",
	"Step 5: Checkout",
];
let currentStep = 0;

interval = setInterval(animateSteps, 1000, 0);
function animateSteps() {
	// console.log(a, b, c, d);
	console.log(steps[currentStep]);
  currentStep++
  if (currentStep >= 5){
    clearInterval(interval)
  }
}



module.exports = { animateSteps };
