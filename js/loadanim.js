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


async function preclear() {
    PS4.innerHTML = `[orangexarot@website ~]$ `;
    typ4.innerHTML = `_`;
    await sleep(faster);
    typ4.innerHTML = `c_`;
    await sleep(faster);
    typ4.innerHTML = `cl_`;
    await sleep(faster);
    typ4.innerHTML = `cle_`;
    await sleep(faster);
    typ4.innerHTML = `clea_`;
    await sleep(faster);
    typ4.innerHTML = `clear_`;
    await sleep(faster);
    typ4.innerHTML = `clear`;
    await sleep(faster);

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
    typ1.innerHTML = `_`;
    await sleep(500);
    typ1.innerHTML = `n_`;
    await sleep(waiting);
    typ1.innerHTML = `ne_`;
    await sleep(waiting);
    typ1.innerHTML = `neo_`;
    await sleep(waiting);
    typ1.innerHTML = `neof_`;
    await sleep(waiting);
    typ1.innerHTML = `neofe_`;
    await sleep(waiting);
    typ1.innerHTML = `neofet_`;
    await sleep(waiting);
    typ1.innerHTML = `neofetc_`;
    await sleep(waiting);
    typ1.innerHTML = `neofetch_`;
    await sleep(waiting);
    typ1.innerHTML = `neofetch`;
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
    typ1.innerHTML = `_`;
    await sleep(waiting);
    typ1.innerHTML = `u_`;
    await sleep(waiting);
    typ1.innerHTML = `uw_`;
    await sleep(waiting);
    typ1.innerHTML = `uwu_`;
    await sleep(waiting);
    typ1.innerHTML = `uwuf_`;
    await sleep(waiting);
    typ1.innerHTML = `uwufe_`;
    await sleep(waiting);
    typ1.innerHTML = `uwufet_`;
    await sleep(waiting);
    typ1.innerHTML = `uwufetc_`;
    await sleep(waiting);
    typ1.innerHTML = `uwufetch_`;
    await sleep(waiting);
    typ1.innerHTML = `uwufetch`;

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



async function files(){
    PS2.innerHTML = `[orangexarot@website ~]$ `;
    typ2.innerHTML = `_`;
    await sleep(700);
    typ2.innerHTML = `l_`;
    await sleep(waiting);
    typ2.innerHTML = `ls_`;
    await sleep(waiting);
    typ2.innerHTML = `ls _`;
    await sleep(waiting);
    typ2.innerHTML = `ls -_`;
    await sleep(waiting);
    typ2.innerHTML = `ls -R_`;
    await sleep(waiting);
    typ2.innerHTML = `ls -R`;

    prompt2.innerHTML = `.:
bin misc profiles

./bin:
<a href="#" id="clear">clear</a> <a href="#" id="neofetch">neofetch</a> <a href="#" id="uwufetch">uwufetch</a>

./misc:
<a href="#" id="bio">biography.txt</a> <a href="#" id="utile">utile.utile</a>

./profiles:
<a href="#" id="github">github</a> <a href="#" id="instagram">instagram</a> <a href="#" id="reddit">reddit</a> <a href="#" id="tiktok">tiktok</a> <a href="#" id="youtube">youtube</a>`;

    PS3.innerHTML = `[orangexarot@website ~]$ `;
    typend.innerHTML = `_`;

    const BG = document.getElementById("bio");
    const UU = document.getElementById("utile");
    const CL = document.getElementById("clear");
    const NF = document.getElementById("neofetch");
    const UF = document.getElementById("uwufetch")

    const GH = document.getElementById("github");
    const IG = document.getElementById("instagram");
    const RD = document.getElementById("reddit");
    const TT = document.getElementById("tiktok");
    const YT = document.getElementById("youtube");


    CL.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `c_`;
        await sleep(faster);
        typend.innerHTML = `cl_`;
        await sleep(faster);
        typend.innerHTML = `cle_`;
        await sleep(faster);
        typend.innerHTML = `clea_`;
        await sleep(faster);
        typend.innerHTML = `clear_`;
        await sleep(faster);
        typend.innerHTML = `clear`;
        await sleep(faster);

        clear();
    }

    NF.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `c_`;
        await sleep(faster);
        typend.innerHTML = `cl_`;
        await sleep(faster);
        typend.innerHTML = `cle_`;
        await sleep(faster);
        typend.innerHTML = `clea_`;
        await sleep(faster);
        typend.innerHTML = `clear_`;
        await sleep(faster);
        typend.innerHTML = `clear`;
        await sleep(faster);

        clear();
    }


    UF.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `c_`;
        await sleep(faster);
        typend.innerHTML = `cl_`;
        await sleep(faster);
        typend.innerHTML = `cle_`;
        await sleep(faster);
        typend.innerHTML = `clea_`;
        await sleep(faster);
        typend.innerHTML = `clear_`;
        await sleep(faster);
        typend.innerHTML = `clear`;
        await sleep(faster);

        uclear();
    }



    YT.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `._`;
        await sleep(faster);
        typend.innerHTML = `./_`;
        await sleep(faster);
        typend.innerHTML = `./p_`;
        await sleep(faster);
        typend.innerHTML = `./pr_`;
        await sleep(faster);
        typend.innerHTML = `./pro_`;
        await sleep(faster);
        typend.innerHTML = `./prof_`;
        await sleep(faster);
        typend.innerHTML = `./profi_`;
        await sleep(faster);
        typend.innerHTML = `./profil_`;
        await sleep(faster);
        typend.innerHTML = `./profile_`;
        await sleep(faster);
        typend.innerHTML = `./profiles_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/y_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/yo_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/you_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/yout_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/youtu_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/youtub_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/youtube_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/youtube`;
        await sleep(faster);

        window.open("https://www.youtube.com/c/OrangeXarot", "_blank");
        preclear();
    }


    UU.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `._`;
        await sleep(faster);
        typend.innerHTML = `./_`;
        await sleep(faster);
        typend.innerHTML = `./m_`;
        await sleep(faster);
        typend.innerHTML = `./mi_`;
        await sleep(faster);
        typend.innerHTML = `./mis_`;
        await sleep(faster);
        typend.innerHTML = `./misc_`;
        await sleep(faster);
        typend.innerHTML = `./misc/_`;
        await sleep(faster);
        typend.innerHTML = `./misc/u_`;
        await sleep(faster);
        typend.innerHTML = `./misc/ut_`;
        await sleep(faster);
        typend.innerHTML = `./misc/uti_`;
        await sleep(faster);
        typend.innerHTML = `./misc/util_`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile_`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile._`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile.u_`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile.ut_`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile.uti_`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile.util_`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile.utile_`;
        await sleep(faster);
        typend.innerHTML = `./misc/utile.utile`;
        await sleep(faster);

        window.open("misc/i.utile.html", "_blank");
        preclear();
    }

    IG.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `._`;
        await sleep(faster);
        typend.innerHTML = `./_`;
        await sleep(faster);
        typend.innerHTML = `./p_`;
        await sleep(faster);
        typend.innerHTML = `./pr_`;
        await sleep(faster);
        typend.innerHTML = `./pro_`;
        await sleep(faster);
        typend.innerHTML = `./prof_`;
        await sleep(faster);
        typend.innerHTML = `./profi_`;
        await sleep(faster);
        typend.innerHTML = `./profil_`;
        await sleep(faster);
        typend.innerHTML = `./profile_`;
        await sleep(faster);
        typend.innerHTML = `./profiles_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/i_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/in_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/ins_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/inst_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/insta_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/instag_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/instagr_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/instagra_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/instagram_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/instagram`;
        await sleep(faster);

        window.open("https://www.instagram.com/orangexarot/", "_blank");
        preclear();
    }

    RD.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `._`;
        await sleep(faster);
        typend.innerHTML = `./_`;
        await sleep(faster);
        typend.innerHTML = `./p_`;
        await sleep(faster);
        typend.innerHTML = `./pr_`;
        await sleep(faster);
        typend.innerHTML = `./pro_`;
        await sleep(faster);
        typend.innerHTML = `./prof_`;
        await sleep(faster);
        typend.innerHTML = `./profi_`;
        await sleep(faster);
        typend.innerHTML = `./profil_`;
        await sleep(faster);
        typend.innerHTML = `./profile_`;
        await sleep(faster);
        typend.innerHTML = `./profiles_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/r_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/re_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/red_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/redd_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/reddi_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/reddit_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/reddit`;
        await sleep(faster);

        window.open("https://www.reddit.com/user/OrangeXarot", "_blank");
        preclear();
    }



    TT.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `._`;
        await sleep(faster);
        typend.innerHTML = `./_`;
        await sleep(faster);
        typend.innerHTML = `./p_`;
        await sleep(faster);
        typend.innerHTML = `./pr_`;
        await sleep(faster);
        typend.innerHTML = `./pro_`;
        await sleep(faster);
        typend.innerHTML = `./prof_`;
        await sleep(faster);
        typend.innerHTML = `./profi_`;
        await sleep(faster);
        typend.innerHTML = `./profil_`;
        await sleep(faster);
        typend.innerHTML = `./profile_`;
        await sleep(faster);
        typend.innerHTML = `./profiles_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/t_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/ti_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/tik_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/tikt_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/tikto_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/tiktok_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/tiktok`;
        await sleep(faster);

        window.open("https://www.tiktok.com/@orangexarot", "_blank");
        preclear();
    }

    GH.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `._`;
        await sleep(faster);
        typend.innerHTML = `./_`;
        await sleep(faster);
        typend.innerHTML = `./p_`;
        await sleep(faster);
        typend.innerHTML = `./pr_`;
        await sleep(faster);
        typend.innerHTML = `./pro_`;
        await sleep(faster);
        typend.innerHTML = `./prof_`;
        await sleep(faster);
        typend.innerHTML = `./profi_`;
        await sleep(faster);
        typend.innerHTML = `./profil_`;
        await sleep(faster);
        typend.innerHTML = `./profile_`;
        await sleep(faster);
        typend.innerHTML = `./profiles_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/g_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/gi_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/git_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/gith_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/githu_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/github_`;
        await sleep(faster);
        typend.innerHTML = `./profiles/github`;
        await sleep(faster);

        window.open("https://github.com/OrangeXarot/", "_blank");
        preclear();
    }

    BG.onclick = async () => {
        typend.innerHTML = `_`;
        await sleep(faster);
        typend.innerHTML = `v_`;
        await sleep(faster);
        typend.innerHTML = `vi_`;
        await sleep(faster);
        typend.innerHTML = `vim_`;
        await sleep(faster);
        typend.innerHTML = `vim _`;
        await sleep(faster);
        typend.innerHTML = `vim m_`;
        await sleep(faster);
        typend.innerHTML = `vim mi_`;
        await sleep(faster);
        typend.innerHTML = `vim mis_`;
        await sleep(faster);
        typend.innerHTML = `vim misc_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/b_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/bi_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/bio_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biog_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biogr_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biogra_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biograp_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biograph_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biography_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biography._`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biography.t_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biography.tx_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biography.txt_`;
        await sleep(faster);
        typend.innerHTML = `vim misc/biography.txt`;
        await sleep(faster);

    window.location.href = 'misc/biography.html';
        preclear();
    }
}

neofetch();
