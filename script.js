var target_mili_sec = new Date("March 07, 2026 00:00:00").getTime();
// var target_mili_sec = new Date("Feb 20, 2024 18:31:00").getTime();
function timer() {
    var now_mili_sec = new Date().getTime();
    var remaining_sec = Math.floor((target_mili_sec - now_mili_sec) / 1000);

    var day = Math.floor(remaining_sec / (3600 * 24));
    var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
    var min = Math.floor((remaining_sec % 3600) / 60);
    var sec = Math.floor(remaining_sec % 60);

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;

    if (remaining_sec <= 0) {
        clearInterval(interval);
        // Redirect to another html file
        window.location.replace("http://localhost:63342/My-Birthday-Countdown/pages/wish.html?_ijt=3m3s4neie4jpl7333hnc9thk5k&_ij_reload=RELOAD_ON_CHANGE");
    }
}

var interval = setInterval(timer, 1000); //1000ms = 1sec