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

    // Add eventListener for dropdown change to load flags
    dropList[i].addEventListener("change", (e) => {
      loadFlags(e.target);
    });
  }
}

// Function to load flag based on the selected currency
function loadFlags(element) {
  for (let code in countryCode) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");

      imgTag.src = `https://flagsapi.com/${countryCode[code]}/flat/64.png`;
    }
  }
}

// Function to Swap Positions of FROM and TO currencies
const exchangeIcon = document.querySelector("form .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;

  loadFlags(fromCurrency);
  loadFlags(toCurrency);
});

// EventListeners for window load and form button click
window.addEventListener("load", (e) => {
  getExchangeRate();
});

getBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

// Function to get the exchange rate and update the UI
function getExchangeRate() {
  const amount = document.querySelector("form input");
  const exchangeRateTxt = document.querySelector("form .exchange-rate");

  let amountValue = amount.value;

  // Set default value to 1 if input os empty or 0
  if (amountValue == "" || amountValue === "0") {
    amount.value = "1";
    amountValue = 1;
  }

  exchangeRateTxt.innerText = "Getting Exchange Rate...";

  let URL = `https://v6.exchangerate-api.com/v6/c459362921b82c46eb9f30d6/latest/${fromCurrency.value}`;

  // Fetch exchange rate data and update UI
  fetch(URL)
    .then((res) => res.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value];

      let totalExRate = (amountValue * exchangeRate).toFixed(2);

      exchangeRateTxt.innerText = `${amountValue} ${fromCurrency.value} = ${totalExRate} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeRateTxt.innerText = "😯 Something Went Wrong";
    });
}
