("use strict");

// Selecting Elements
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

/**
 * Convert Celsius To Fahrenheit
 */
function celToFar() {
  let output = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(output.toFixed(2));
}

/**
 * Convert Fahrenheit To Celsius
 */
function farToCel() {
  let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
  celsius.value = parseFloat(output.toFixed(2));
  console.log(output);
}
