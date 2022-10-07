const dateDay = document.querySelector('.date-day');
const date = document.querySelector('.date');
const month = document.querySelector('.date-month');
const year = document.querySelector('.date-year');

const digitalClock = document.querySelector('.digital-clock');

const arrowHours = document.querySelector('.clock-hours__arrow');
const arrowMinutes = document.querySelector('.clock-minutes__arrow');
const arrowSeconds = document.querySelector('.clock-seconds__arrow');

const namesOfDay = [
  'Неділя',
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  'Пятниця',
  'Субота',
];

const namesOfMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

setInterval(() => {
  const currentDate = new Date();
  const getDay = currentDate.getDay();
  const getMonth = currentDate.getMonth();

  dateDay.textContent = namesOfDay[getDay];
  date.textContent = currentDate.getDate();
  month.textContent = namesOfMonth[getMonth];
  year.textContent = currentDate.getFullYear();

  const hours = currentDate.getHours().toString().padStart(2, '0');
  const minutes = currentDate.getMinutes().toString().padStart(2, '0');
  const seconds = currentDate.getSeconds().toString().padStart(2, '0');

  digitalClock.textContent = `Поточний час: ${hours}:${minutes}:${seconds}`;

  const forHours =
    currentDate.getHours() * 30 + currentDate.getMinutes() * (30 / 60);
  const forMinutes = currentDate.getMinutes() * 6;
  const forSeconds = currentDate.getSeconds() * 6;

  arrowHours.style.transform = `rotate(${forHours}deg)`;
  arrowMinutes.style.transform = `rotate(${forMinutes}deg)`;
  arrowSeconds.style.transform = `rotate(${forSeconds}deg)`;
}, 1000);

//     // 360 / 12 = 30deg проходить годинникова стрілка за одну годину
//     // 360 / 60 = 6deg  хвилинна стрілка
//     // 360 / 60 = 6deg  секундна стрілка

// ---------------promise (lesson 9.2)------------------------------------
const container = document.querySelector('.response');
// https://hostiq.ua/wiki/ukr/404-not-found-error/#gallery-3
// https://en.wiktionary.org/wiki/cat#/media/File:Cat03.jpg
const promise = new Promise((resolve, reject) => {
  const random = Math.random(); // генерує число від 0 до 1
  setTimeout(() => {
    if (random > 0.5) {
      resolve(
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_SjKN5DxsjoA7-np-rigXRiYgMS9nM0sAKUiln4VwMQ&s'
      );
    } else {
      reject(
        'https://hostiq.ua/wiki/wp-content/uploads/2021/05/03-error-404-not-found-1.png'
      );
    }
  }, 1000);
});
console.log(promise);
promise
  .then(response => {
    container.insertAdjacentHTML(
      'beforeend',
      `<img src=${response} alt='cat' width="500"/>`
    );
  })
  .catch(error =>
    container.insertAdjacentHTML(
      'beforeend',
      `<img src=${error} alt='404' width="500"/>`
    )
  );
// // resolve = response
// // reject = err
