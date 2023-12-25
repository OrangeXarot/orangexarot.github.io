const GAME = document.querySelector("#game");
let items = [];
let todayItem;

fetch("items.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    for (let i = 0; i < data.items.length; i++) {
      items[i] = data.items[i];
    }

    let todayRandomIndex = getRandomIndex();
    todayItem = items[todayRandomIndex];
  })
  .catch((error) => {
    console.error("Error:", error);
  });

function updateCountdown() {
  // Get the current time
  var now = new Date();

  // Set the target time to midnight
  var targetMidnight = new Date(now);
  targetMidnight.setHours(24, 0, 0, 0);

  // Calculate the time difference in milliseconds
  var timeDiff = targetMidnight - now;

  // Calculate hours, minutes, and seconds
  var hours = Math.floor(timeDiff / (1000 * 60 * 60));
  var minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML =
    "The Item Resets In: <br />" +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s";

  // Update every second
  setTimeout(updateCountdown, 1000);
}

// Initial call to start the countdown
updateCountdown();

let times = 0;
GAME.innerHTML = `
<div class="firstinsert">
  <input type="text" name="guess" id="guess" onkeyup="tooltip()" placeholder="Enter Item Here" onkeypress="handleKeyPress(event)" />
  <img onclick="guess()" id="firstsub" src="src/button.webp">
</div>

<div id="tooltip"></div>
<div id="guesses"></div>
<div id="old"></div>
<div id="stats"></div>

`;

function handleKeyPress(event) {
  // Check if the pressed key is Enter (key code 13)
  if (event.key === "Enter") {
    // Call the guess() function
    guess();
  }
}

function getRandomIndex() {
  const today = new Date();
  const seed =
    today.getFullYear().toString() +
    today.getMonth().toString() +
    today.getDate().toString();
  const randomIndex = parseInt(seed.replace(/\D/g, ""), 10) % items.length;
  return randomIndex;

  //return Math.floor(Math.random() * items.length);
}

function guess() {
  let guess = document.querySelector("#guess");
  let guesses = document.querySelector("#guesses");
  let old = document.querySelector("#old");
  let guessed;

  for (let i = 0; i < items.length; i++) {
    if (items[i].title.toLowerCase() === guess.value.toLowerCase()) {
      guessed = items[i];
    }
  }

  if (guessed === undefined) {
    return;
  }

  if (guess === "") {
    return;
  }

  let tmp = old.innerHTML;
  old.innerHTML = "";
  old.innerHTML = guesses.innerHTML;
  old.innerHTML += tmp;

  guesses.innerHTML = "";

  let undertitle = guessed.title.replace(/ /g, "_");

  let imgloc = `src/all_items/Collectible_${undertitle}_icon.png`;

  times++;
  guesses.innerHTML = `<div class="entire"></div>`;
  let entire = document.querySelector(".entire");
  if (todayItem.title === guessed.title) {
    entire.innerHTML += `<div class="lil correct"><span class="innertext"><img class='lilicons' src="${imgloc}"></span></div> `;
  } else {
    entire.innerHTML += `<div class="lil wrong"><span class="innertext"><img class='lilicons' src="${imgloc}"></span></div> `;
  }
  if (todayItem.type === guessed.type) {
    entire.innerHTML += `<div class="lil correct"><span class="innertext">${guessed.type}</span></div> `;
  } else {
    entire.innerHTML += `<div class="lil wrong"><span class="innertext">${guessed.type}</span></div> `;
  }

  if (checkTransformation(todayItem) === checkTransformation(guessed)) {
    entire.innerHTML += `<div class="lil correct"><span class="innertext">${checkTransformation(
      guessed,
    )}</span></div> `;
  } else {
    entire.innerHTML += `<div class="lil wrong"><span class="innertext">${checkTransformation(
      guessed,
    )}</span></div> `;
  }

  if (todayItem.quality === guessed.quality) {
    entire.innerHTML += `<span class="lil correct"><span class="innertext">${guessed.quality}</span></span> `;
  } else {
    if (guessed.quality > todayItem.quality) {
      entire.innerHTML += `<div class="lil lower"><span class="innertext">${guessed.quality} ↓</span></div> `;
    } else {
      entire.innerHTML += `<div class="lil higher"><span class="innertext">${guessed.quality} ↑</span></div> `;
    }
  }

  if (todayItem.pool === guessed.pool) {
    entire.innerHTML += `<div class="lil correct"><span class="innertext">${guessed.pool}</span></div> `;
  } else {
    if (
      todayItem.pool
        .split(", ")
        .some((element) => guessed.pool.split(", ").includes(element))
    ) {
      entire.innerHTML += `<div class="lil semi"><span class="innertext">${guessed.pool}</span></div> `;
    } else {
      entire.innerHTML += `<div class="lil wrong"><span class="innertext">${guessed.pool}</span></div> `;
    }
  }

  if (checkDLC(todayItem) === checkDLC(guessed)) {
    entire.innerHTML += `<div class="lil correct"><span class="innertext">${checkDLC(
      guessed,
    )}</span></div> `;
  } else {
    entire.innerHTML += `<div class="lil wrong"><span class="innertext">${checkDLC(
      guessed,
    )}</span></div> `;
  }

  guess.value = "";
  document.querySelector("#tooltip").innerHTML = "";
  document.querySelector("#tooltip").style.visibility = "hidden";

  if (todayItem.title === guessed.title) {
    winfirst();
  }
}

function tooltip() {
  let tooltip = document.querySelector("#tooltip");
  let guess = document.querySelector("#guess");
  tooltip.innerHTML = "";
  tooltip.style.visibility = "hidden";

  if (guess.value === "" || guess.readOnly) {
    return;
  }
  let counter = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].title.toLowerCase().includes(guess.value.toLowerCase())) {
      tooltip.style.visibility = "visible";
      let undertitle = items[i].title.replace(/ /g, "_");
      let imgloc = `src/all_items/Collectible_${undertitle}_icon.png`;

      tooltip.innerHTML += `<span onclick="selectOption(${i})" class="selected"><img src="${imgloc}">${items[i].title}</span>`;
      counter++;
      if (counter >= 5) {
        break;
      }
    }
  }
}

function selectOption(option) {
  document.querySelector("#guess").value = items[option].title;
  document.querySelector("#tooltip").innerHTML = "";
  document.querySelector("#tooltip").style.visibility = "hidden";

  guess();
}

function checkDLC(item) {
  if (item.id <= 346 && item.id != 263) {
    return "Rebirth";
  } else if (item.id >= 347 && item.id <= 441) {
    return "Afterbirth";
  } else if (item.id >= 442 && item.id <= 552) {
    return "Afterbirth+";
  } else {
    return "Repentance";
  }
}

function checkTransformation(item) {
  if (
    item.id === 81 ||
    item.id === 133 ||
    item.id === 134 ||
    item.id === 145 ||
    item.id === 187 ||
    item.id === 212 ||
    item.id === 665
  ) {
    return "Guppy";
  } else if (
    item.id === 9 ||
    item.id === 10 ||
    item.id === 57 ||
    item.id === 128 ||
    item.id === 151 ||
    item.id === 248 ||
    item.id === 264 ||
    item.id === 272 ||
    item.id === 274 ||
    item.id === 279 ||
    item.id === 320 ||
    item.id === 364 ||
    item.id === 365 ||
    item.id === 426 ||
    item.id === 430 ||
    item.id === 434 ||
    item.id === 461 ||
    item.id === 492 ||
    item.id === 511 ||
    item.id === 581 ||
    item.id === 629 ||
    item.id === 649 ||
    item.id === 650 ||
    item.id === 693
  ) {
    return "Beelzebub";
  } else if (
    item.id === 11 ||
    item.id === 12 ||
    item.id === 71 ||
    item.id === 120 ||
    item.id === 121 ||
    item.id === 342 ||
    item.id === 398 ||
    item.id === 553 ||
    item.id === 582 ||
    item.id === 625
  ) {
    return "Fun Guy";
  } else if (
    item.id === 33 ||
    item.id === 72 ||
    item.id === 101 ||
    item.id === 112 ||
    item.id === 142 ||
    item.id === 162 ||
    item.id === 173 ||
    item.id === 182 ||
    item.id === 184 ||
    item.id === 185 ||
    item.id === 313 ||
    item.id === 331 ||
    item.id === 363 ||
    item.id === 374 ||
    item.id === 568 ||
    item.id === 573 ||
    item.id === 643 ||
    item.id === 691
  ) {
    return "Seraphim";
  } else if (
    item.id === 42 ||
    item.id === 140 ||
    item.id === 149 ||
    item.id === 273
  ) {
    return "Bob";
  } else if (
    item.id === 13 ||
    item.id === 14 ||
    item.id === 70 ||
    item.id === 143 ||
    item.id === 240 ||
    item.id === 345 ||
    item.id === 493 ||
    item.id === 496
  ) {
    return "Spun";
  } else if (
    item.id === 29 ||
    item.id === 30 ||
    item.id === 31 ||
    item.id === 55 ||
    item.id === 110 ||
    item.id === 114 ||
    item.id === 139 ||
    item.id === 195 ||
    item.id === 199 ||
    item.id === 200 ||
    item.id === 217 ||
    item.id === 228 ||
    item.id === 355 ||
    item.id === 508 ||
    item.id === 732 ||
    item.id === 39 ||
    item.id === 41 ||
    item.id === 102 ||
    item.id === 439 ||
    item.id === 552 ||
    item.id === 604
  ) {
    return "Yes Mother?";
  } else if (
    item.id === 8 ||
    item.id === 167 ||
    item.id === 269 ||
    item.id === 100 ||
    item.id === 322 ||
    item.id === 268 ||
    item.id === 67 ||
    item.id === 188 ||
    item.id === 491 ||
    item.id === 607 ||
    item.id === 518 ||
    item.id === 652 ||
    item.id === 113 ||
    item.id === 265 ||
    item.id === 404 ||
    item.id === 608 ||
    item.id === 163 ||
    item.id === 112 ||
    item.id === 360 ||
    item.id === 472 ||
    item.id === 679 ||
    item.id === 275 ||
    item.id === 435 ||
    item.id === 431 ||
    item.id === 661 ||
    item.id === 174 ||
    item.id === 95 ||
    item.id === 267 ||
    item.id === 390 ||
    item.id === 363 ||
    item.id === 698
  ) {
    return "Conjoined";
  } else if (
    item.id === 83 ||
    item.id === 556 ||
    item.id === 51 ||
    item.id === 79 ||
    item.id === 80 ||
    item.id === 82 ||
    item.id === 118 ||
    item.id === 159 ||
    item.id === 230 ||
    item.id === 399 ||
    item.id === 572
  ) {
    return "Leviathan";
  } else if (
    item.id === 36 ||
    item.id === 291 ||
    item.id === 504 ||
    item.id === 236 ||
    item.id === 209 ||
    item.id === 576 ||
    item.id === 543 ||
    item.id === 680
  ) {
    return "Oh Crap";
  } else if (
    item.id === 33 ||
    item.id === 34 ||
    item.id === 35 ||
    item.id === 58 ||
    item.id === 65 ||
    item.id === 78 ||
    item.id === 97 ||
    item.id === 123 ||
    item.id === 192 ||
    item.id === 282 ||
    item.id === 287 ||
    item.id === 292 ||
    item.id === 545 ||
    item.id === 712 ||
    item.id === 584
  ) {
    return "Bookworm";
  } else if (
    item.id === 89 ||
    item.id === 153 ||
    item.id === 170 ||
    item.id === 211 ||
    item.id === 234 ||
    item.id === 248 ||
    item.id === 266 ||
    item.id === 280 ||
    item.id === 367 ||
    item.id === 377 ||
    item.id === 403 ||
    item.id === 461 ||
    item.id === 575 ||
    item.id === 717 ||
    item.id === 171 ||
    item.id === 288
  ) {
    return "Spider Baby";
  } else {
    return "None";
  }
}

function winfirst() {
  let guess = document.querySelector("#guess");
  let firstsub = document.querySelector("#firstsub");
  let old = document.querySelector("#old");
  let stats = document.querySelector("#stats");

  guess.value = todayItem.title;
  guess.readOnly = true;
  firstsub.style.visibility = "hidden";
  firstsub.style.pointerEvents = "none";
  firstsub.style.width = "0";

  old.style.height = "0px";
  old.style.overflow = "hidden";

  stats.innerHTML += `You got it in ${times} tries!!!`;
  stats.style.opacity = "1";
}
