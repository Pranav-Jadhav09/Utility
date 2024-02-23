("use strict");

// Selecting Elements
const wrapper = document.querySelector(".wrapper");
const searchInput = wrapper.querySelector("input");
const volume = wrapper.querySelector(".word i");
const infoText = wrapper.querySelector(".info-text");
const synonyms = wrapper.querySelector(".synonyms .list");
const removeIcon = wrapper.querySelector(".search span");
let audio;

/**
 * Fetch Data From API
 * @param {String} word Input Word
 */
function fetchAPI(word) {
  wrapper.classList.remove("active");

  infoText.style.color = `#000`;
  infoText.innerHTML = `Searching the meaning of <span>${word}</span> `;

  let URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  console.log(URL);

  fetch(URL)
    .then((response) => response.json())
    .then((result) => data(result, word))
    .catch(() => {
      infoText.innerHTML = `Can't find the meaning of <span>${word}</span>. Please, try to search for another word.`;
    });
}

fetchAPI("happy");

/**
 * @param {String} word Input Value
 */
function search(word) {
  fetchAPI(word);
  searchInput.value = word;
}

function data(result, word) {
  console.log(result, word);
}

// Event Listeners
searchInput.addEventListener("keyup", (e) => {});

volume.addEventListener("click", () => {});

removeIcon.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();

  wrapper.classList.remove("active");

  infoText.style.color = `#9a9a9a`;
  infoText.innerHTML = `Type any existing word and press enter to get meaning, example, synonyms, etc.`;
});
