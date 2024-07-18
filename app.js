let isRunning = false;
let startTime;
let elapsedTime = 0;
let timerInterval;

// Wait for the DOM to fully load before accessing elements
document.addEventListener("DOMContentLoaded", function() {
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

    // Ensure seconds and milliseconds are displayed with two digits
    stopwatch.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
}
