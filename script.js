const hour = document.querySelector(".hour-input");
const minute = document.querySelector(".min-input");
const second = document.querySelector(".sec-input");

const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const lap = document.querySelector(".lap");

start.addEventListener("click", startWatch);
reset.addEventListener("click", resetWatch);
pause.addEventListener("click", pauseWatch);
lap.addEventListener("click", lapWatch);

let interval;

// On Load Default Values
onLoad();
function onLoad() {
  hour.value = "00";
  minute.value = "00";
  second.value = "00";
}

// Start Watch Event
function startWatch() {
  start.innerHTML = "Start";
  if (!interval) {
    interval = setInterval(clock, 1000);
  }
}

// Reset Watch Event
function resetWatch() {
  start.innerHTML = "Start";
  clearInterval(interval);
  interval = null;
  hour.value = "00";
  minute.value = "00";
  second.value = "00";
  document.querySelector(".lap-list").innerHTML = "";
}

// Pause Watch Event
function pauseWatch() {
  clearInterval(interval);
  interval = null;
  start.innerHTML = "Resume";
}

// Laps Time Event
function lapWatch() {
  let li = document.createElement("LI");
  li.classList = "list-items";
  li.innerHTML = `${hour.value} : ${minute.value} : ${second.value}`;
  const ulList = document.querySelector(".lap-list");
  ulList.appendChild(li);
}

// Stop Watch Logic
function clock() {
  second.value = Number(second.value) + 1;
  if (second.value < 10) {
    second.value = 0 + second.value;
  }
  if (second.value == 60) {
    second.value = "00";
    minute.value = Number(minute.value) + 1;
    if (minute.value < 10) {
      minute.value = 0 + minute.value;
    }
  }
  if (minute.value == 60) {
    minute.value = "00";
    hour.value = Number(hour.value) + 1;
    if (hour.value < 10) {
      hour.value = 0 + hour.value;
    }
  }
}
