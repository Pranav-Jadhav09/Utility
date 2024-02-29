("use strict");

/**
 * Calculate The BMI
 */
function calculate() {
  let BMI;
  const result = document.getElementById("result");

  // Weight
  const weight = parseInt(document.getElementById("weight").value);
  document.getElementById("weight-val").textContent = weight + "kg";

  // Height
  const height = parseInt(document.getElementById("height").value);
  document.getElementById("height-val").textContent = height + "cm";

  // Formula
  BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  result.textContent = BMI;

  // Color Change on BMI value
  if (BMI < 28.5) {
    category = "Underweight";
    result.style.color = "#ffc44d";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    category = "Normal Weight";
    result.style.color = "#0be881";
  } else if (BMI >= 25 && BMI <= 29.9) {
    category = "Overweight";
    result.style.color = "#ff884d";
  } else {
    category = "Obese";
    result.style.color = "#ff5e57";
  }

  // Category Output
  document.getElementById("category").textContent = category;
}
