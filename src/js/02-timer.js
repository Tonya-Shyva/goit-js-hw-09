import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const refs = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('button[data-start]'),
  timerDiv: document.querySelector('.timer'),
  spanValues: document.querySelectorAll('.value'),
  spanDaysValue: document.querySelector('span[data-days]'),
  spanHoursValue: document.querySelector('span[data-hours]'),
  spanMinutesValue: document.querySelector('span[data-minutes]'),
  spanSecondsValue: document.querySelector('span[data-seconds]'),
};

// console.dir(refs.spanValues);
refs.btnStart.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      refs.btnStart.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      refs.btnStart.disabled = false;
    }
  },
};

flatpickr(refs.input, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.btnStart.addEventListener('click', onBtnStartTimerClick);

function onBtnStartTimerClick() {
  let timer = setInterval(() => {
    let countdown = new Date(refs.input.value) - new Date();
    refs.btnStart.disabled = true;
    if (countdown >= 0) {
      let timeValue = convertMs(countdown);
      refs.spanDaysValue.textContent = addLeadingZero(timeValue.days);
      refs.spanHoursValue.textContent = addLeadingZero(timeValue.hours);
      refs.spanMinutesValue.textContent = addLeadingZero(timeValue.minutes);
      refs.spanSecondsValue.textContent = addLeadingZero(timeValue.seconds);
      if (countdown <= 59999) {
        refs.spanSecondsValue.style.color = 'red';
      }
    } else {
      clearInterval(timer);
      refs.spanSecondsValue.style.color = 'black';
      Notiflix.Notify.success('The countdown is over');
    }
  }, 1000);
}
