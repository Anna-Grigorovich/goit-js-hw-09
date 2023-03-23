const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;
let activeBtn = false;

btnStart.addEventListener('click', handleClickBtnStart);
btnStop.addEventListener('click', handleClickBtnStop);

function handleClickBtnStart() {
  if (activeBtn) {
    return;
  }
  activeBtn = true;
  btnStart.disabled = true;
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
}
function handleClickBtnStop() {
  clearInterval(timerId);
  activeBtn = false;
  btnStart.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
