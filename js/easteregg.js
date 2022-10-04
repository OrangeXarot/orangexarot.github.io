let bufferArray = [];
let lastKeystrokeTime = Date.now();
let rotation = 0;
let spins = 0;
const EG = document.getElementById("spins");

const cheatcode = "spin";

async function spin() {
    if(rotation==0){
        for(let i = 0; i<180; i++) {
            await sleep(0);
            document.body.style.setProperty("-webkit-transform", `rotate(-${i}deg)`, null);
            rotation++;
        }
    } else {
        for(let i = 180; i<=360; i++) {
            await sleep(0);
            document.body.style.setProperty("-webkit-transform", `rotate(-${i}deg)`, null);
            rotation=0;
        }
        spins++;
        if(spins==1){
            EG.innerHTML = `you did ${spins} spin`;
        } else {
            EG.innerHTML = `you did ${spins} spins`;
        }
    }
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
    if (word === cheatcode) {
        spin();
    }

    lastKeystrokeTime = latestKeystrokeTime;

});
