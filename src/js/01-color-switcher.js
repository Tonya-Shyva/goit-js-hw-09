const startBtnRef = document.querySelector('button[data-start]');
const stopBtnRef = document.querySelector('button[data-stop]');
let timerId = null;

// stopBtnRef.disabled = true; //якщо треба, щоб спочатку ця кнопка була вимкнена(властивість disabled для кнопки)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtnRef.addEventListener('click', onStartBtnClick);
stopBtnRef.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtnRef.disabled = true; //кнопка start стає вимкненою(недієздатною)
  stopBtnRef.disabled = false;

  timerId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  startBtnRef.disabled = false;
  stopBtnRef.disabled = true;
  clearInterval(timerId);
}
