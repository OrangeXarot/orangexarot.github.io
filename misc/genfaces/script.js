

let faces = [];
let times = 20;
let placeholder;


function getChar() {
    let num = Math.floor(Math.random() * 154998);
    return String.fromCharCode(num);
}

function copy(i) {
    var copyText = document.querySelector(`.face${i}`);

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
}

function prepare() {
    let all = document.querySelector(".faces");
    
    
    all.innerHTML = "";
    if(placeholder === undefined) placeholder = "x_x"
    for (let i = 1; i <= times; i++) {
        all.innerHTML += `<div class="element"><input type="text" value="${placeholder}" class="face${i} face" readonly/><button onclick="copy(${i})" class="copy">copy</button></div>`;
    }
}

function generate() {
    times = document.querySelector("#times").value;
    placeholder = document.querySelector("#placeholder");

    prepare();

    for (let i = 1; i <= times; i++) {
        let tag = document.querySelector(`.face${i}`);
        let x = getChar();
        let y = getChar();
        faces[i] = [x, y];
    }

    update();
}

function update() {
    for (let i = 1; i <= times; i++) {
        let tag = document.querySelector(`.face${i}`);
        let newString = placeholder.value.replaceAll("x", faces[i][0]);
        newString = newString.replaceAll("y", faces[i][1]);
        tag.value = newString;
    }
}

function setPH(string) {
    times = document.querySelector("#times").value;
    placeholder = document.querySelector("#placeholder");
    
    placeholder.value = string;


    if(faces[1] != undefined) {
       update(times, placeholder);
    }
}


function toggleAdvanced() {
    let advanced = document.querySelector(".advanced");
    let options = document.querySelector(".options");
    
    advanced.classList.toggle("hidden");
    options.classList.toggle("rotated");
    
    
}

function blinkFace() {
    const faceElement = document.querySelector(".blinky");

    // Close the eyes (simulate blink)
    faceElement.textContent = '-_-';

    // Re-open the eyes after 200 milliseconds
    setTimeout(() => {
        faceElement.textContent = 'x_x';
    }, 200);
}

function randomBlink() {
    const randomInterval = Math.random() * 6000 + 1000; // Random time between 1 and 6 seconds
    setTimeout(() => {
        blinkFace();
        randomBlink(); // Schedule the next blink
    }, randomInterval);
}

// Start blinking
randomBlink();