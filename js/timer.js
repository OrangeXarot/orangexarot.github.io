let time = 0;


setInterval(updateTimer, 1000);

async function easterEgg() {
    if (time == 3600) {
        typend.innerHTML = `._`;
        await sleep(1000);
        typend.innerHTML = `./_`;
        await sleep(1000);
        typend.innerHTML = `./m_`;
        await sleep(1000);
        typend.innerHTML = `./mi_`;
        await sleep(1000);
        typend.innerHTML = `./mis_`;
        await sleep(1000);
        typend.innerHTML = `./misc_`;
        await sleep(1000);
        typend.innerHTML = `./misc/_`;
        await sleep(1000);
        typend.innerHTML = `./misc/._`;
        await sleep(1000);
        typend.innerHTML = `./misc/.e_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.ea_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.eas_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.east_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.easte_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.easter_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.eastere_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.eastereg_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.easteregg_`;
        await sleep(1000);
        typend.innerHTML = `./misc/.easteregg`;

        window.open("misc/easteregg.html", "_blank");
        preclear();

    }
}

function updateTimer() {
    easterEgg();
    let timerEl = document.getElementById('timer');
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    timerEl.innerHTML = `${minutes}m ${seconds}s`;
    time++;
}
