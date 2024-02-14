("use strict");

// Selecting Elements From the DOM
const dropList = document.querySelectorAll("form select");
const getBtn = document.querySelector("form button");
const fromCurrency = document.querySelector(".from select");
const toCurrency = document.querySelector(".to select");

// Loop through dropdown lists
for (let i = 0; i < dropList.length; i++) {
  for (const currCode in countryCode) {
    // Set default selections form FROM to TO currencies
    let selected;

    if (i == 0) {
      selected = currCode == "USD" ? "selected" : "";
    } else if (i == 1) {
      selected = currCode == "INR" ? "selected" : "";
    }

    // Create option tag with currency code as text and value
    let optionTag = `<option value="${currCode}" ${selected}> ${currCode} </option>`;

    // Insert Option tag inside select tag
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
}
