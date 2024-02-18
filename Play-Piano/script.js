// ("use strict");

const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio(`assets/a.wav`); // by default, audio src is "a" tune

const playTune = (key) => {
  // Passing audio src based on key pressed
  audio.src = `./assets/${key}.wav`;

  // Playing audio
  audio.play();

  // Getting clicked key element
  const clickedKey = document.querySelector(`[data-key="${key}"]`);

  // Adding active class to the clicked key element
  clickedKey.classList.add("active");

  // Removing active class after 150 ms from the clicked key element
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  // Adding data-key value to the allkeys array
  allKeys.push(key.dataset.key);

  // Calling playTune function with passing data-key value as an argument
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  // Passing the range slider value as an audio volume
  audio.volume = e.target.value;
};

const showHideKeys = () => {
  // Toggle hide class from each key on the checkbox click
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  // If the pressed key is in the allkeys array, only call the playTune function
  if (allKeys.includes(e.key)) playTune(e.key);
};

// EventListener
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);
