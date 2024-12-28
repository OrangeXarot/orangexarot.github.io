const REDUCE = document.querySelector(".dot3");
const TERM = document.querySelector(".terminal");
const PHRASE = document.querySelector(".phrase");
const PHRASES = ["How you doin'?",
    "Cool site huh?",
    "So what if you 'rm -rf --no-preserve-root /'?",
    "Carrot.",
    "Lorem ipsum dolor sit amet.",
    "Try typing 'spin' (:",
    "(:",
    "q:",
    "ඞ",
    "👁️⃤",
    "Bird is the word.",
    "d'oh!",
    "ArchLinux ftw!",
    "sus.",
    "while(True) { sleep(); }",
    "So... I like linux huh?"
];

let size = 80;
let big = true;
moving = false;
let prevRand;

function randomP() {
    let random = Math.floor(Math.random() * PHRASES.length);
    if (random != prevRand) {
        PHRASE.innerHTML = `${PHRASES[random]}`;
        prevRand = random;
    } else {
        randomP();
    }
}

REDUCE.onclick = async () => {
    if (big && !moving) {
        moving = true;
        randomP();
        for (let i = 0; i <= 70; i++) {
            await sleep(0);
            TERM.style.height = `${size - i}vh`;
        }
        size = 5;
        big = false;
        moving = false;
        TERM.scrollTo(20, 0);
        TERM.style.overflowY = "hidden";
    } else if (!moving) {
        for (let i = 0; i <= 70; i++) {
            moving = true;
            await sleep(0);
            TERM.style.height = `${size + i}vh`;
        }
        size = 75;
        big = true;
        moving = false;
        TERM.style.overflowY = "scroll";
    }
};