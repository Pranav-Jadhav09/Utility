("use strict");

// Selecting Elements
let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const URL = `https://api.quotable.io/random`;

const getJoke = async () => {
  // Remove fade class first
  jokeContainer.classList.remove("fade");

  // Fetch joke data and handle promise
  try {
    const response = await fetch(URL);
    const data = await response.json();

    // Update content and add fade class
    jokeContainer.textContent = data.joke;
    jokeContainer.classList.add("fade");
  } catch (error) {
    // Handle potential errors during fetch or parsing
    console.error("Error fetching joke:", error);
  }
};

/**
 * Fetch Quote Funciton
 */
const getQuote = async () => {
  // Fetch quote data and handle promise
  try {
    const response = await fetch(URL);
    const data = await response.json();

    // Update Content
    quote.innerText = data.content;
    author.innerText = data.author;
  } catch (error) {
    // Handle Potential errors during fetch or parsing
    console.error("Error fetching quote:", error);
  }
};

// EventListener
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
