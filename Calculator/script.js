const display = document.querySelector(".display");
const buttonsContainer = document.querySelector(".buttons");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

// Define an array of button values including numbers and operators
const buttonValues = [
  "AC",
  "DEL",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  "00",
  ".",
  "=",
];

// Function to create a button element with a given value
const createButton = (value) => {
  const button = document.createElement("button");
  button.textContent = value;
  button.dataset.value = value;
  button.classList.add("btn");
  if (specialChars.includes(value) || value === "0") {
    button.classList.add("operator");
  }
  return button;
};

// Function to render buttons
const renderButtons = () => {
  buttonValues.forEach((value) => {
    const button = createButton(value);
    buttonsContainer.appendChild(button);
  });
};

// Call the renderButtons function to generate buttons on page load
renderButtons();

// Define function to calculate based on button clicked
const calculate = (btnValue) => {
  display.focus();

  if (btnValue === "=" && output !== "") {
    // Evaluate the expression
    let result = eval(output.replace("%", "/100"));

    // Round the result to 10 decimal places (adjust as needed)
    result = Number(result.toFixed(10));
    output = result.toString();
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }

  display.value = output;
};

// Add event listener to buttons, call calculate() on click
buttonsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    // Button click listener calls calculate() with dataset value as argument.
    calculate(e.target.dataset.value);
  }
});
