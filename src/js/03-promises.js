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
//   for (
//     let sequenceNumber = 0;
//     sequenceNumber < refs.inputAmount.value;
//     sequenceNumber += 1
//   ) {
//     createPromise(1 + sequenceNumber, firstDelay + sequenceNumber * delayStep)
//       .then((sequenceNumber, delay) => {
//         Notiflix.Notify.success(
//           `✅ Fulfilled promise ${sequenceNumber} in ${delay}ms`
//         );
//       })
//       .catch((sequenceNumber, delay) => {
//         Notiflix.Notify.failure(
//           `❌ Rejected promise ${sequenceNumber} in ${delay}ms`
//         );
//       });
//   }
// }
// ----------------------------------------------------------------------------------

// --------інше рішення(повідомлення виводяться у консоль)------------

const refs = {
  delayInput: document.querySelector('input[name="delay"]'),
  stepInput: document.querySelector('input[name="step"]'),
  amountInput: document.querySelector('input[name="amount"]'),
  createBtn: document.querySelector('button[type="submit"]'),
};

refs.createBtn.addEventListener('click', counter);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  return promise;
}

function counter(evt) {
  evt.preventDefault();
  const delay = Number(refs.delayInput.value);
  const step = Number(refs.stepInput.value);
  const position = refs.amountInput.value;
  for (let i = 0; i < position; i += 1) {
    createPromise(1 + i, delay + i * step);
  }
}
