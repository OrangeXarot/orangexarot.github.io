function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

async function write(element, input, output, delay) {
    let tmp = "user@website:~$ ";
    element.innerText = tmp + "_";
    await sleep(delay)
    for(let i = 0; i < input.length; i++) {
    tmp += input.charAt(i);
    element.innerText = tmp + "_";
    await sleep(delay)
    }
    element.innerText = tmp;

    const outs = output.split("\n");

for (let i = 0; i < outs.length; i++) {
    await sleep(60);
    tmp += outs[i];
    element.innerHTML = tmp
}
let main = document.querySelector(".main");
let sh = document.querySelector("#spn");
let gltch = document.querySelector(".gltch");

await sleep(300);
main.classList.toggle("hidden");
sh.classList.toggle("hidden");

}

function start() {
let element = document.getElementById("spn");
let input = "start-website";
let output = `<br />
Loading Website...<br /><br />
Welcome to WebsiteOS [Version 1.0]<br /><br />
Booting up...<br /><br />
Loading modules...<br />
&nbsp;Loading module1...<br />
&nbsp;&nbsp;Initializing components...<br />
&nbsp;&nbsp;Detecting dependencies...<br />
&nbsp;&nbsp;Done.<br /><br />
&nbsp;Loading module2...<br />
&nbsp;&nbsp;Verifying configurations...<br />
&nbsp;&nbsp;Loading assets...<br />
&nbsp;&nbsp;Done.<br /><br />
&nbsp;Loading module3...<br />
&nbsp;&nbsp;Setting up database connections...<br />
&nbsp;&nbsp;Populating initial data...<br />
&nbsp;&nbsp;Done.<br /><br />
Starting services...<br />
&nbsp;Starting service1...<br />
&nbsp;&nbsp;Establishing network connections...<br />
&nbsp;&nbsp;Running background tasks...<br />
&nbsp;&nbsp;Done.<br /><br />
&nbsp;Starting service2...<br />
&nbsp;&nbsp;Initializing caching mechanisms...<br />
&nbsp;&nbsp;Configuring API endpoints...<br />
&nbsp;&nbsp;Done.<br /><br />
&nbsp;Starting service3...<br />
&nbsp;&nbsp;Authenticating users...<br />
&nbsp;&nbsp;Setting up user permissions...<br />
&nbsp;&nbsp;Done.<br /><br />
Website started successfully!<br />
Enjoy your browsing.<br />`;
let delay = 80;

write(element, input, output, delay);
}