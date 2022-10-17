const containeR = document.getElementById("terminal");
const perc = document.getElementById("perc");
containeR.onscroll = function (event) {
    var scrollPercentage = parseInt((100 * containeR.scrollTop) / (containeR.scrollHeight - containeR.clientHeight));
    perc.innerHTML = `${scrollPercentage}% `;
};
