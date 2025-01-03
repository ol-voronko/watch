let timerId;
const intervalId = [];
const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  timerId = setInterval(updateClock, 1000);
  intervalId.push(timerId);
});

const stopButton = document.getElementById("stop");
stopButton.addEventListener("click", function () {
  intervalId.forEach(clearInterval);
});

function updateClock() {
  const clock = document.getElementById("clock");

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}
