console.log(` ▒█████  ▒██   ██▒
▒██▒  ██▒▒▒ █ █ ▒░
▒██░  ██▒░░  █   ░
▒██   ██░ ░ █ █ ▒
░ ████▓▒░▒██▒ ▒██▒
░ ▒░▒░▒░ ▒▒ ░ ░▓ ░
  ░ ▒ ▒░ ░░   ░▒ ░
░ ░ ░ ▒   ░    ░
    ░ ░   ░    ░
`);

const SHELL = document.querySelector(".shell");
const USER = "orangexarot";
const HOST = "website";
const PROMPT = `[${USER}@${HOST} ~]$ _`;
const TERMINAL = document.querySelector(".terminal");
let WRITING = false; 
let bufferArray = []
let rotation = 0;
let spins = 0;
let rotating = false;
let spintext = "";
let time = 0;
let minutes;
let seconds;
let booting = false;

const NEOFETCH = `<pre><span class="orange">                      <span class="green2fg">//////</span>     orangexarot</span>@<span class="orange">website</span>
<span class="orange">                    <span class="green2fg">//    ////</span>   </span>-------------------
<span class="orange">              ////  <span class="green2fg">//  //  //</span>   </span><span class="orange">OS</span>: CarrotOS
<span class="orange">            //    //<span class="green2fg">  //    //</span>   </span><span class="orange">Kernel</span>: Linux
<span class="orange">          //  //    //<span class="green2fg">  ////</span>     </span><span class="orange">Uptime</span>: <span class="timer">0m 0s</span>
<span class="orange">        //      //    //         </span><span class="orange">Shell</span>: Bash
<span class="orange">      //                //       </span><span class="orange">Terminal</span>: <span class="usr">useragent</span>
<span class="orange">    //                  //       </span><span class="orange">Terminal Font</span>: Source Code Pro
<span class="orange">    //    //          //         </span>
<span class="orange">  //        //      //           </span><span class="colors"><span class="blackbg">nev</span><span class="red2bg">er </span><span class="green2bg">gon</span><span class="yellow2bg">na </span><span class="orange2bg">giv</span><span class="magenta2bg">e y</span><span class="cyan2bg">ou </span><span class="white2bg">up </span></span>
<span class="orange">  //    //    //  //             </span><span class="colors"><span class="graybg">nev</span><span class="redbg">er </span><span class="greenbg">gon</span><span class="yellowbg">na </span><span class="orangebg">let</span><span class="magentabg"> yo</span><span class="cyanbg">u d</span><span class="whitebg">own</span></span>
<span class="orange">//        //  ////               </span>
<span class="orange">//        ////                   </span>
<span class="orange">  ////////                       </span></pre>`

const UWUFETCH = `<pre><span class="orange">                      <span class="green2fg">//////</span>     orangexarot</span>@<span class="orange">website</span>
<span class="orange">                    <span class="green2fg">//    ////</span>   </span>-------------------
<span class="orange">              ////  <span class="green2fg">//  //  //</span>   </span><span class="orange">OwOS</span>: CawwotOwOS
<span class="orange">            //    //<span class="green2fg">  //    //</span>   </span><span class="orange">Kewnel</span>: Linuwu
<span class="orange">          //  //    //<span class="green2fg">  ////</span>     </span><span class="orange">UwUptime</span>: <span class="timer">0m 0s</span>
<span class="orange">        //      //    //         </span><span class="orange">Sheww</span>: Bash
<span class="orange">      //                //       </span><span class="orange">Tewminal</span>: <span class="usr">useragent</span>
<span class="orange">    //          > ω <   //       </span><span class="orange">Tewminal Font</span>: Souwce Code Prowo
<span class="orange">    //    //          //         </span>
<span class="orange">  //        //      //           </span><span class="colors"><span class="blackbg">nev</span><span class="red2bg">ew </span><span class="green2bg">gon</span><span class="yellow2bg">na </span><span class="orange2bg">giw</span><span class="magenta2bg">e y</span><span class="cyan2bg">ou </span><span class="white2bg">up </span></span>
<span class="orange">  //    //    //  //             </span><span class="colors"><span class="graybg">nev</span><span class="redbg">ew </span><span class="greenbg">gon</span><span class="yellowbg">na </span><span class="orangebg">let</span><span class="magentabg"> yo</span><span class="cyanbg">u d</span><span class="whitebg">own</span></span>
<span class="orange">//        //  ////               </span>
<span class="orange">//        ////                   </span>
<span class="orange">  ////////                       </span></pre>`

const FILES = `<pre>.:
bin misc profiles sites

./bin:
<a href="#" id="clear">clear</a> <a href="#" id="neofetch">neofetch</a> <a href="#" id="uwufetch">uwufetch</a>

./misc:
<a href="#" id="bio">biography.txt</a> <a href="#" id="genfaces">genfaces</a> <a href="#" id="utile">utile.utile</a> <a href="#" id="word">wordfuser</a>

./profiles:
<a href="#" id="github">github</a> <a href="#" id="instagram">instagram</a> <a href="#" id="youtube">youtube</a>

./sites:
<a href="#" id="fitjkm">fitjkm-repack</a> <a href="#" id="jjstash">jjstash</a> <a href="#" id="oxwallzz">oxwallzz</a></pre>`

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function writeOutput(text) {
    shellText = SHELL.innerHTML;

    if(text == "") {
        SHELL.innerHTML = shellText
            +"<br />"+ PROMPT;
    } else {
        SHELL.innerHTML = shellText
            +"<br />"+ text
            +"<br />"+ PROMPT;
    }
    
    TERMINAL.scrollTop = TERMINAL.scrollHeight;
}

async function writeInput(text, delayChars, delayEnter) {
    shellText = SHELL.innerHTML;

    await sleep(delayChars);
    
    for (var i = 0; i <= text.length; i++) {
        SHELL.innerHTML = SHELL.innerHTML.slice(0, -1) + text.substring(i, i+1) + "_";
        await sleep(delayChars);
    }
    
    await sleep(delayEnter);

    SHELL.innerHTML = SHELL.innerHTML.slice(0, -1);

    await sleep(delayEnter);
}

async function command(input, dontWrite) {
    if(WRITING)
        return;
    WRITING = true;
    
    if(!dontWrite) {
        await writeInput(input, 50, 100);
    }
    

    switch (input) {
        case "clear":
            SHELL.innerHTML = PROMPT;
            break;
        case "neofetch":
            writeOutput(NEOFETCH)
            setInterval(updateTimerHTML, 1000);
            updateUA();
            break;
        case "uwufetch":
            writeOutput(UWUFETCH);
            updateUA();
            break;
        case "ls -R":
            writeOutput(FILES);
            loadLinks();
            break;
        case "./profiles/github":
            writeOutput("Going to url <a href='https://github.com/OrangeXarot/'>https://github.com/OrangeXarot/</a>...");
            window.open("https://github.com/OrangeXarot/", "_blank");
            break;
        case "./profiles/youtube":
            writeOutput("Going to url <a href='https://www.youtube.com/c/OrangeXarot/'>https://www.youtube.com/c/OrangeXarot/</a>...");
            window.open("https://www.youtube.com/c/OrangeXarot/", "_blank");
            break;
        case "./misc/utile.utile":
            writeOutput("Going to url <a href='misc/i.utile.html'>misc/i.utile.html</a>...");
            window.open("misc/i.utile.html", "_blank");
            break;
        case "./misc/wordfuser":
            writeOutput("Going to url <a href='misc/fuse.html'>misc/fuse.html</a>...");
            window.open("misc/fuse.html", "_blank");
            break;
        case "./profiles/instagram":
            writeOutput("Going to url <a href='https://www.instagram.com/orangexarot/'>https://www.instagram.com/orangexarot/</a>...");
            window.open("https://www.instagram.com/orangexarot/", "_blank");
            break;
        case "vim misc/biography.txt":
            writeOutput("");
            window.open("misc/biography.html");
            break;
        case "./misc/genfaces":
            writeOutput("Going to url <a href='misc/genfaces/index.html'>misc/genfaces/index.html</a>...");
            window.open("misc/genfaces/index.html", "_blank");
            break;
        case "./sites/fitjkm-repack":
            writeOutput("Going to url <a href='https://fitjkm-repack.github.io/'>https://fitjkm-repack.github.io/</a>...");
            window.open("https://fitjkm-repack.github.io/", "_blank");
            break;
        case "./sites/oxwallzz":
            writeOutput("Going to url <a href='https://oxwallzz.github.io/'>https://oxwallzz.github.io/</a>...");
            window.open("https://oxwallzz.github.io/", "_blank");
            break;
        case "./sites/jjstash":
            writeOutput("Going to url <a href='https://jjstash.github.io/'>https://jjstash.github.io/</a>...");
            window.open("https://jjstash.github.io/", "_blank");
            break;

        case "":
            writeOutput("");
            break;
        case "spin":
            await spin();
            writeOutput("Weeeeeeeeee<br />" + spintext);
            break;
        default:
            writeOutput(input+": command not found");
            break;

    }
    WRITING = false;
}

async function boot() {
    if(booting) return;
    booting = true;
    let bootbtn = document.querySelector(".boot");
    bootbtn.style.color = "#fff";
    bootbtn.style.borderColor = "#fff";
    bootbtn.style.background = `linear-gradient(to right, #fff 0%, #0c0c0c 0%)`
    document.querySelector(".boot-info").classList.add("diss");
    
    bootphrasesudev = [ 
        "<span class='white2fg'>:: running early hook [udev]</span>",
        "<span class='white2fg'>starting version 2.0-carrot</span>",
        "<span class='white2fg'>:: running hook [udev]</span>",
        "<span class='white2fg'>:: triggering uevents...</span>",
        "<span class='white2fg'>:: performing fsck on '/dev/sda3'</span>",
        "<span class='white2fg'>/dev/sda3 recovering journal</span>",
        "<span class='white2fg'>/dev/sda3: clean 1001/100900 files, 42069/69420</span>",
        "<span class='white2fg'>:: mounting '/dev/sda3' on real root</span>",
        "<span class='white2fg'>:: running cleanup hook [udev]</span>",
        "",
        "<span class='white2fg'>Welcome to <span class='orange'>CarrotOS</span>!</span>",
        "",
    ]
    
    bootphrasessd = [
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Initializing</span> Intergalactic Drive...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Creating</span> Warp Speed Cache...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Engaging</span> Coffee Protocol v1.2...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Bootstrapping</span> Cat GIF Firewall...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Launching</span> Infinite Loop Detector...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Verifying</span> User Coolness... PASSED!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Establishing Connection</span> to Meme Server...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Encrypting</span> Cookies with Extra Chocolate Chips...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Compiling</span> Fun.js... DONE!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Starting</span> Party Mode on Port 404...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Mounting</span> Unicorn Storage Volumes...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Listening for</span> Pizza Delivery API Calls...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Deploying</span> Rainbow Animation Sequence...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Cooking</span> Some Pasta...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Debugging</span> Parallel Universe Links...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Updating</span> JavaScript... Skipped, It Sucks Anyway.",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Generating</span> Lorem Ipsum Poetry...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Dancing For</span> The Fun...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Rebooting</span> Planet Earth... Err... Oops, Sorry!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Enabling</span> Internet Explorer Compatibility Mode... Just Kidding!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Enabling</span> Duck Mode... Quack Ready!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Searching for</span> the Meaning of Life... Not Found Yet!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Compiling</span> ASCII Art for Good Vibes...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Activating</span> Easter Egg Subsystem...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Redirecting</span> RAM to /dev/null...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Emulating</span> Reality... SUCCESSFUL!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Spawning</span> Friendly AI Companions...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Spawning</span> Hostile AI Enemies...",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Searching Again for</span> the Meaning of Life... 42!",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Linking to</span> the Matrix... Neo Approved.",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Starting</span> Getty on tty1",
        "<span class='white2fg'>[ <span class='greenfg'>OK</span> ] Reached target</span> Login Prompts",
    ]    
    
    SHELL.innerHTML = "_";
    
    let totboot =  bootphrasesudev.length + bootphrasessd.length;
    let bootcounter = 1;
    let perc = 0;
    
    console.log(totboot)
    for (let i = 0; i < bootphrasesudev.length; i++) {
        await sleep(50);
        SHELL.innerHTML = SHELL.innerHTML.slice(0, -1) + bootphrasesudev[i] + "<br />_";
        TERMINAL.scrollTop = TERMINAL.scrollHeight;

        bootcounter++;
        perc = Math.round(bootcounter/totboot*100);
        bootbtn.style.background = `linear-gradient(to right, #fff ${perc}%, #0c0c0c ${perc}%)`
    }
    
    await sleep(200);
    
    

    for (let i = 0; i < bootphrasessd.length; i++) {
        await sleep(20);
        SHELL.innerHTML =  SHELL.innerHTML.slice(0, -1) + bootphrasessd[i] + "<br />_";
        TERMINAL.scrollTop = TERMINAL.scrollHeight;

        bootcounter++;
        perc = Math.round(bootcounter/totboot*100);
        bootbtn.style.background = `linear-gradient(to right, #fff ${perc}%, #0c0c0c ${perc}%)`
    }

    await sleep(300);

    setInterval(updateTimer, 1000);

    bootbtn.classList.add("diss");

    SHELL.innerHTML = "CarrotOS 2.0-carrot (tty)<br />website login: _";

    await sleep(100);
    await writeInput(USER, 50, 100);
    SHELL.innerHTML =  SHELL.innerHTML+ "<br />" + "Password: _";
    await sleep(450);
    SHELL.innerHTML =  SHELL.innerHTML.slice(0, -1) + "<br />";
    SHELL.innerHTML += PROMPT
    
    await command("neofetch");
    await command("ls -R")
    
    

    window.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            SHELL.innerHTML = SHELL.innerHTML.slice(0, -1); 
            command(bufferArray.join(''), true);
            bufferArray = []; 
            
        } else if (e.key === "Backspace") {
            e.preventDefault(); 
            if (bufferArray.length > 0) {
                bufferArray.pop(); 
                SHELL.innerHTML = SHELL.innerHTML.slice(0, -2) + "_"; 
            }
        } else if (e.key.length === 1) { 
            bufferArray.push(e.key); 
            SHELL.innerHTML = SHELL.innerHTML.slice(0, -1) + e.key + "_"; 
        }
    });

}

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
                spintext = `you did ${spins} spin`;
                break;
            case 9:
                spintext = `you did ${spins}? spins`;
                break;
            default:
                spintext = `you did ${spins} spins`;
                break;
        }
    }
    rotating = false;
    console.log("I feel dizzy")
}
function loadLinks() {
    const BG = document.getElementById("bio");
    const UU = document.getElementById("utile");
    const GF = document.getElementById("genfaces");
    const WF = document.getElementById("word");
    const CL = document.getElementById("clear");
    const NF = document.getElementById("neofetch");
    const UF = document.getElementById("uwufetch");

    const GH = document.getElementById("github");
    const IG = document.getElementById("instagram");
    const YT = document.getElementById("youtube");

    const FJ = document.getElementById("fitjkm");
    const JJ = document.getElementById("jjstash")
    const OW = document.getElementById("oxwallzz");

    CL.onclick = async () => {
        await command("clear");
        await command("neofetch");
        await command("ls -R")
        loadLinks();
    };

    NF.onclick = async () => {
        await command("neofetch");
        loadLinks();
    };

    UF.onclick = async () => {
        await command("uwufetch");
        loadLinks();
    };

    YT.onclick = async () => {
        await command(`./profiles/youtube`);
        loadLinks();
    };

    UU.onclick = async () => {
        await command(`./misc/utile.utile`);
        loadLinks();
    };

    WF.onclick = async () => {
        await command(`./misc/wordfuser`);
        loadLinks();
    };

    IG.onclick = async () => {
        await command(`./profiles/instagram`);
        loadLinks();
    };
    

    GH.onclick = async () => {
        await command("./profiles/github");
        loadLinks();
    };


    BG.onclick = async () => {
        await command(`vim misc/biography.txt`);
        loadLinks();
    };


    GF.onclick = async () => {
        await command(`./misc/genfaces`);
        loadLinks();
    };

    FJ.onclick = async () => {
        await command(`./sites/fitjkm-repack`);
        loadLinks();
    };

    JJ.onclick = async () => {
        await command(`./sites/jjstash`);
        loadLinks();
    };



    OW.onclick = async () => {
        await command(`./sites/oxwallzz`);
        loadLinks();
    };

}

function updateTimer() {
    
    
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    time++;
}

function updateTimerHTML() {
    let timerEl = document.querySelectorAll(".timer").forEach(e => {
        e.innerHTML = `${minutes}m ${seconds}s`;
    });
    
}
function updateUA() {
    const usrEl = document.querySelectorAll(".usr").forEach(e => {
        var result = bowser.getParser(navigator.userAgent).getResult();
        e.innerHTML = `${result.browser.name} (${result.os.name})`;
    });
}