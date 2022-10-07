// import Notiflix from 'notiflix';

// const refs = {
//   inputDelay: document.querySelector('input[name="delay"]'),
//   inputStep: document.querySelector('input[name="step"]'),
//   inputAmount: document.querySelector('input[name="amount"]'),
//   btnSubmitPromise: document.querySelector('button[type="submit"]'),
// };

// function createPromise(amount, delay) {
//   const promise = new Promise((resolve, reject) => {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(amount, delay);
//       } else {
//         reject(amount, delay);
//       }
//     }, delay);
//   });
//   return promise;
// }

// refs.btnSubmitPromise.addEventListener('click', onBtnSubmitPromiseClick);

// function onBtnSubmitPromiseClick(evt) {
//   evt.preventDefault();
//   let firstDelay = Number(refs.inputDelay.value);
//   let delayStep = Number(refs.inputStep.value);
//   for (let i = 0; i < refs.inputAmount.value; i += 1) {
//     createPromise(1 + i, firstDelay + i * delayStep)
//       .then((decentNumber, delay) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${decentNumber} in ${delay}ms`
//         );
//       })
//       .catch((decentNumber, delay) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${decentNumber} in ${delay}ms`
//         );
//       });
//   }
// }
// ----------------------------------------------------------------------------------
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
