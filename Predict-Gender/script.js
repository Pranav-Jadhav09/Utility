("use strict");

const URL = `https://api.genderize.io?name=`;
const wrapper = document.getElementById("wrapper");

/**
 * Function to Predict Gender
 */
const predictGender = async () => {
  let name = document.getElementById("name").value;
  let error = document.getElementById("error");
  let finalURL = URL + name;

  // DOM Update
  error.innerHTML = "";
  wrapper.innerHTML = "";

  // Check if input field is not empty & entered name does not contain anything but alphabets
  if (name.length > 0 && /^[A-Za-z]+$/.test(name)) {
    try {
      const response = await fetch(finalURL);
      const data = await response.json();

      // Markup
      const infoDiv = document.createElement("div");
      infoDiv.id = "info";
      infoDiv.innerHTML = `
        <h2 id="result-name">${data.name}</h2>
        <img src="" id="gender-icon"/>
        <h1 id="gender">${data.gender}</h1>
        <h4 id="prob">Probability: ${data.probability}</h4>
      `;

      wrapper.append(infoDiv);
      infoDiv.classList.add(data.gender === "male" ? "male" : "female");

      // Setting image
      document.getElementById("gender-icon").src =
        data.gender === "female" ? "./assets/female.svg" : "./assets/male.svg";
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error appropriately, e.g., display an error message to the user
    }

    document.getElementById("name").value = "";
  } else {
    error.innerHTML = "Enter a valid name with no spaces";
  }
};

// EventListener
document.getElementById("submit").addEventListener("click", predictGender);
window.addEventListener("load", predictGender);
