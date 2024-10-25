console.log("btw the errors below here do not exist (;");

const typ1 = document.getElementById("typ1");
const prompt1 = document.getElementById("prompt1");
const PS2 = document.getElementById("PS2");
const typ2 = document.getElementById("typ2");
const prompt2 = document.getElementById("prompt2");
const PS3 = document.getElementById("PS3");
const typend = document.getElementById("typend");
const PS4 = document.getElementById("PS4");
const typ4 = document.getElementById("typ4");
const waiting = 100;
const faster = 50;

const YT = document.getElementById("youtube");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function usr() {
  const usrEl = document.getElementById("usr");

  var result = bowser.getParser(navigator.userAgent).getResult();
  usrEl.innerHTML = `${result.browser.name} (${result.os.name})`;
}

async function type(location, text, delay1, delay2) {
  location.innerHTML = "_";
  await sleep(delay1);

  for (var i = 0; i <= text.length; i++) {
    location.innerHTML = text.substring(0, i) + "_";
    await sleep(delay2);
  }

  location.innerHTML = text;
  await sleep(delay2);
}

async function preclear() {
  PS4.innerHTML = `[orangexarot@website ~]$ `;

  await type(typ4, `clear`, faster, faster);

  clear();
}

function clear() {
  typ1.innerHTML = ``;
  prompt1.innerHTML = ``;
  PS2.innerHTML = ``;
  typ2.innerHTML = ``;
  prompt2.innerHTML = ``;
  PS3.innerHTML = ``;
  typend.innerHTML = ``;
  PS4.innerHTML = ``;
  typ4.innerHTML = ``;
  neofetch();
}

function uclear() {
  typ1.innerHTML = ``;
  prompt1.innerHTML = ``;
  PS2.innerHTML = ``;
  typ2.innerHTML = ``;
  prompt2.innerHTML = ``;
  PS3.innerHTML = ``;
  typend.innerHTML = ``;
  PS4.innerHTML = ``;
  typ4.innerHTML = ``;
  uwufetch();
}

async function neofetch() {
  await type(typ1, `neofetch`, 500, waiting);

  prompt1.innerHTML = `<span id="orange">                      <span id="green2">//////</span>     orangexarot</span>@<span id="orange">website</span>
<span id="orange">                    <span id="green2">//    ////</span>   </span>-------------------
<span id="orange">              ////  <span id="green2">//  //  //</span>   </span><span id="orange">OS</span>: CarrotOS
<span id="orange">            //    //<span id="green2">  //    //</span>   </span><span id="orange">Kernel</span>: Linux
<span id="orange">          //  //    //<span id="green2">  ////</span>     </span><span id="orange">Uptime</span>: <span id="timer">0m 0s</span>
<span id="orange">        //      //    //         </span><span id="orange">Shell</span>: Bash
<span id="orange">      //                //       </span><span id="orange">Terminal</span>: <span id="usr">useragent</span>
<span id="orange">    //                  //       </span><span id="orange">Terminal Font</span>: Source Code Pro
<span id="orange">    //    //          //         </span>
<span id="orange">  //        //      //           </span><span id="colors"><span id="black">nev</span><span id="red2">er </span><span id="green2c">gon</span><span id="yellow2">na </span><span id="orange2">giv</span><span id="magenta2">e y</span><span id="cyan2">ou </span><span id="white2">up </span></span>
<span id="orange">  //    //    //  //             </span><span id="colors"><span id="gray">nev</span><span id="red">er </span><span id="green">gon</span><span id="yellow">na </span><span id="orangec">let</span><span id="magenta"> yo</span><span id="cyan">u d</span><span id="white">own</span></span>
<span id="orange">//        //  ////               </span>
<span id="orange">//        ////                   </span>
<span id="orange">  ////////                       </span>`;

  usr();
  files();
}

async function uwufetch() {
  await type(typ1, `uwufetch`, 500, waiting);

  prompt1.innerHTML = `<span id="orange">                      <span id="green2">//////</span>     orangexarot</span>@<span id="orange">website</span>
<span id="orange">                    <span id="green2">//    ////</span>   </span>-------------------
<span id="orange">              ////  <span id="green2">//  //  //</span>   </span><span id="orange">OwOS</span>: CawwotOwOS
<span id="orange">            //    //<span id="green2">  //    //</span>   </span><span id="orange">Kewnel</span>: Linuwu
<span id="orange">          //  //    //<span id="green2">  ////</span>     </span><span id="orange">UwUptime</span>: <span id="timer">0m 0s</span>
<span id="orange">        //      //    //         </span><span id="orange">Sheww</span>: Bash
<span id="orange">      //                //       </span><span id="orange">Tewminal</span>: <span id="usr">useragent</span>
<span id="orange">    //          > ω <   //       </span><span id="orange">Tewminal Font</span>: Souwce Code Prowo
<span id="orange">    //    //          //         </span>
<span id="orange">  //        //      //           </span><span id="colors"><span id="black">nev</span><span id="red2">ew </span><span id="green2c">gon</span><span id="yellow2">na </span><span id="orange2">giw</span><span id="magenta2">e y</span><span id="cyan2">ou </span><span id="white2">up </span></span>
<span id="orange">  //    //    //  //             </span><span id="colors"><span id="gray">nev</span><span id="red">ew </span><span id="green">gon</span><span id="yellow">na </span><span id="orangec">let</span><span id="magenta"> yo</span><span id="cyan">u d</span><span id="white">own</span></span>
<span id="orange">//        //  ////               </span>
<span id="orange">//        ////                   </span>
<span id="orange">  ////////                       </span>`;

  usr();
  files();
}

async function files() {
  PS2.innerHTML = `[orangexarot@website ~]$ `;

  await type(typ2, `ls -R`, 700, waiting);

  prompt2.innerHTML = `.:
bin misc profiles

./bin:
<a href="#PS3" id="clear">clear</a> <a href="#PS3" id="neofetch">neofetch</a> <a href="#PS3" id="uwufetch">uwufetch</a>

./misc:
<a href="#PS3" id="bio">biography.txt</a> <a href="#PS3" id="genfaces">genfaces</a> <a href="#PS3" id="tboidle">tboidle</a> <a href="#PS3" id="utile">utile.utile</a> <a href="#PS3" id="word">wordfuser</a>

./profiles:
<a href="#PS3" id="github">github</a> <a href="#PS3" id="instagram">instagram</a> <a href="#PS3" id="youtube">youtube</a>

./sites:
<a href="#PS3" id="fitjkm">fitjkm-repack</a>  <a href="#PS3" id="oxwallzz">oxwallzz</a>
`;

  PS3.innerHTML = `[orangexarot@website ~]$ `;
  typend.innerHTML = `_`;

  const BG = document.getElementById("bio");
  const UU = document.getElementById("utile");
  const TD = document.getElementById("tboidle");
  const GF = document.getElementById("genfaces");
  const WF = document.getElementById("word");
  const CL = document.getElementById("clear");
  const NF = document.getElementById("neofetch");
  const UF = document.getElementById("uwufetch");

  const GH = document.getElementById("github");
  const IG = document.getElementById("instagram");
  const RD = document.getElementById("reddit");
  const TT = document.getElementById("tiktok");
  const YT = document.getElementById("youtube");

  const FJ = document.getElementById("fitjkm");
  const OW = document.getElementById("oxwallzz");


  CL.onclick = async () => {
    await type(typend, `clear`, faster, faster);

    clear();
  };

  NF.onclick = async () => {
    await type(typend, `clear`, faster, faster);

    clear();
  };

  UF.onclick = async () => {
    await type(typend, `clear`, faster, faster);

    uclear();
  };

  YT.onclick = async () => {
    await type(typend, `./profiles/youtube`, faster, faster);

    window.open("https://www.youtube.com/c/OrangeXarot", "_blank");
    preclear();
  };

  UU.onclick = async () => {
    await type(typend, `./misc/utile.utile`, faster, faster);

    window.open("misc/i.utile.html", "_blank");
    preclear();
  };

  WF.onclick = async () => {
    await type(typend, `./misc/wordfuser`, faster, faster);

    window.open("misc/fuse.html", "_blank");
    preclear();
  };

  IG.onclick = async () => {
    await type(typend, `./profiles/instagram`, faster, faster);

    window.open("https://www.instagram.com/orangexarot/", "_blank");
    preclear();
  };


  /*TT.onclick = async () => {
    await type(typend, `./profiles/tiktok`, faster, faster);

    window.open("https://www.tiktok.com/@orangexarot", "_blank");
    preclear();
  };*/

  GH.onclick = async () => {
    await type(typend, `./profiles/github`, faster, faster);

    window.open("https://github.com/OrangeXarot/", "_blank");
    preclear();
  };

  BG.onclick = async () => {
    await type(typend, `vim misc/biography.txt`, faster, faster);

    window.location.href = "misc/biography.html";
    preclear();
  };


  GF.onclick = async () => {
    await type(typend, `./misc/genfaces`, faster, faster);

    window.open("misc/genfaces/index.html", "_blank");
    preclear();
  };

  FJ.onclick = async () => {
    await type(typend, `./sites/fitjkm-repack`, faster, faster);

    window.open("https://fitjkm-repack.github.io/", "_blank");
    preclear();
  };

  OW.onclick = async () => {
    await type(typend, `./sites/oxwallzz`, faster, faster);

    window.open("https://oxwallzz.github.io/", "_blank");
    preclear();
  };


}



neofetch();
