let bufferArray = [];
let lastKeystrokeTime = Date.now();
let rotation = 0;
let spins = 0;
let rotating = false;
const EG = document.getElementById("spins");

const cheatcode = "spin";

async function spin() {
    if(rotation==0 && !rotating) {
        for(let i = 0; i<=180; i++) {
            rotating = true;
            await sleep(0);
            document.body.style.setProperty("-webkit-transform", `rotate(-${i}deg)`, null);
            rotation++;
        }
    } else if(!rotating) {
        for(let i = 180; i<=360; i++) {
            rotating = true;
            await sleep(0);
            document.body.style.setProperty("-webkit-transform", `rotate(-${i}deg)`, null);
            rotation=0;
        }
        spins++;
        switch(spins) {
            case 1:
                EG.innerHTML = `you did ${spins} spin`;
                break;
            case 9:
                EG.innerHTML = `you did ${spins}? spins`;
                break;
            default:
                EG.innerHTML = `you did ${spins} spins`;
                break;
        }
    }
    rotating = false;
    console.log("I feel dizzy")
}

window.addEventListener("keyup", e => {
    const key = e.key.toLowerCase();
    const latestKeystrokeTime = Date.now();

    if (latestKeystrokeTime - lastKeystrokeTime > 1500) {
        bufferArray = [];
    }

    bufferArray.push(key);

    const word = bufferArray.join("");
    if (word.includes(cheatcode)) {
        spin();
        bufferArray = [];
    }

    lastKeystrokeTime = latestKeystrokeTime;

});
