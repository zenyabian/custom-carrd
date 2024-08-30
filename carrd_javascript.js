function updateTime() {
    var now = new Date();
    var time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
    document.getElementById("datetime").innerHTML = time;
}

setInterval(updateTime, 1000);

updateTime();
