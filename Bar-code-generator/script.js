("use strict");

// Selecting Elements
let input = document.getElementById("input");
const btn = document.getElementById("btn");

// EventListeners
btn.addEventListener("click", () => {
  JsBarcode("#barcode", input.value, {
    format: "code128",
    displayValue: true,
    fontSize: 24,
    lineColor: "#000",
  });
});

// Onload clear input field
window.onload = (event) => {
  input.value = "";
};
