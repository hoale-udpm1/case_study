// tính giờ
let secs = 0;
let currentSeconds = 0;
let currentMinutes = 0;
let timer;

// hàm bắt đầu đếm giờ
function beginTime() {
    secs = 0;
    currentSeconds = 0;
    currentMinutes = 0;
    clearTimeout(timer);
    intervalTime();
}

// hàm đếm giờ
function intervalTime() {
    currentMinutes = Math.floor(secs / 60);
    currentSeconds = secs % 60;

    if(currentMinutes <= 9) {
        currentMinutes = "0" + currentMinutes;
    }

    if(currentSeconds <= 9) {
        currentSeconds = "0" + currentSeconds;
    }

    secs++;
    document.getElementById("board-time").innerText = (currentMinutes + ":" + currentSeconds);
    timer = setTimeout('intervalTime()', 1000);
    console.log(secs);
}
