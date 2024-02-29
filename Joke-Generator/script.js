("use strict");

const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const URL = `https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`;

/**
 * Get Jokes
 */
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

// EventListener
btn.addEventListener("click", getJoke);
getJoke();
