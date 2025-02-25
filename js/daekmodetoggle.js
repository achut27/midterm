// Select elements we need
const body = document.querySelector("body");
const resultScreen = document.getElementById("resultScreen");

// Dark mode function
function setDarkMode() {
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
}

// Light mode function
function setLightMode() {
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
}

// Factorial calculation
function calculateFactorial() {
  const input = document.getElementById("factorialInput").value;
  const num = parseInt(input);

  if (isNaN(num) || num < 0) {
    resultScreen.textContent = "Please enter a valid non-negative integer.";
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  // Display the result in the format: "3! = 6"
  resultScreen.textContent = `${num}! = ${factorial}`;
}
