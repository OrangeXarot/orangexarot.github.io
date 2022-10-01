const perc = document.getElementById("perc");
window.onscroll = function(event){
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    var percent = parseInt((h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight)*100);

    perc.innerHTML = `${percent}% `
}
