let isRunning = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

let stopwatch = document.getElementById('stopwatch');
let startStopButton = document.getElementById('startStopButton');
let resetButton = document.getElementById('resetButton');

startStopButton.addEventListener("click", function () {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener("click", function () {
    resetTimer();
});

function startTimer() {
    isRunning = true;
    startStopButton.textContent = "Stop";
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function stopTimer() {
    isRunning = false;
    startStopButton.textContent = "Start";
    clearInterval(timerInterval);
}

function resetTimer() {
    isRunning = false;
    startStopButton.textContent = "Start";
    clearInterval(timerInterval);
    elapsedTime = 0;
    updateTime();
    document.getElementById('stopwatch').textContent = "0:00:00"
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateDisplay();
}

function updateDisplay() {
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    stopwatch.textContent = `${minutes}:${seconds}:${milliseconds}`;
}