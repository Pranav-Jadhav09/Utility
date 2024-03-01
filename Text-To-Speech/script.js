("use strict");

// Selecting Elements
const text = document.getElementById("txt");
const submitBtn = document.getElementById("submit");
const resumeBtn = document.getElementById("resume");
const pauseBtn = document.getElementById("pause");
let audioMessage;

submitBtn.addEventListener("click", () => {
  // Set The Text
  audioMessage.text = text.value;

  // Speak The Text
  window.speechSynthesis.speak(audioMessage);
});

resumeBtn.addEventListener("click", () => {
  pauseBtn.style.display = "block";
  resumeBtn.style.display = "none";

  // Resume The Audio if It is paused
  if (speechSynthesis.pause) {
    speechSynthesis.resume();
  }
});

pauseBtn.addEventListener("click", () => {
  pauseBtn.style.display = "none";
  resumeBtn.style.display = "block";

  // Pause if speaking
  speechSynthesis.speaking ? speechSynthesis.pause() : "";
});

window.onload = () => {
  resumeBtn.style.display = "none";

  if ("speechSynthesis" in window) {
    audioMessage = new SpeechSynthesisUtterance();
  } else {
    alert("Speech Synthese is not supported");
  }
};
