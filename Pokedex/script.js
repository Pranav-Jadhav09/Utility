("use strict");

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
};

const URL = `https://pokeapi.co/api/v2/pokemon/`;
const card = document.getElementById("card");
const btn = document.getElementById("btn");

/**
 * Fetch Pokemon Data
 */
const getData = async () => {
  // Generate Random Number between 1 and 150
  let id = Math.floor(Math.random() * 150) + 1;

  // Combine Pokeapi url with pokemon id
  const finalURL = URL + id;

  try {
    const response = await fetch(finalURL);
    const data = await response.json();

    // Generate Card
    generateCard(data);
  } catch (error) {
    console.error("Error in fetching Pokemon", error);
  }
};

/**
 * @param {JSON} data  Pokemon Data
 */
const generateCard = (data) => {
  // Required Data
  const hp = data.stats[0].base_stat;
  const statAttack = data.stats[1].base_stat;
  const statDefense = data.stats[2].base_stat;
  const statSpeed = data.stats[5].base_stat;
  const imageSrc = data.sprites.other.dream_world.front_default;
  const pokemonName = data.name[0].toUpperCase() + data.name.slice(1);

  // Set Theme Color based on pokemon type
  const themeColor = typeColor[data.types[0].type.name];

  card.innerHTML = `
  <p class="hp">
          <span>HP</span>
            ${hp}
        </p>
        <img src=${imageSrc} />
        <h2 class="poke-name">${pokemonName}</h2>
        <div class="types">
         
        </div>
        <div class="stats">
          <div>
            <h3>${statAttack}</h3>
            <p>Attack</p>
          </div>
          <div>
            <h3>${statDefense}</h3>
            <p>Defense</p>
          </div>
          <div>
            <h3>${statSpeed}</h3>
            <p>Speed</p>
          </div>
        </div>
  `;

  appendTypes(data.types); // Call Type Tags
  styleCard(themeColor); // Call StyleCard
};

const appendTypes = (types) => {
  types.forEach((item) => {
    let span = document.createElement("span");
    span.textContent = item.type.name;

    document.querySelector(".types").appendChild(span);
  });
};

/**
 * @param {Hexcode} color Color Hex code based on type of pokemon
 */
const styleCard = (color) => {
  card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;

  card.querySelectorAll(".types span").forEach((typeColor) => {
    typeColor.style.background = color;
  });
};

// EventListeners
btn.addEventListener("click", getData);
window.addEventListener("load", getData);
