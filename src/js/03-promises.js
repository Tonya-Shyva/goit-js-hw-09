import Notiflix from 'notiflix';

const refs = {
  inputDelay: document.querySelector('input[name="delay"]'),
  inputStep: document.querySelector('input[name="step"]'),
  inputAmount: document.querySelector('input[name="amount"]'),
  btnSubmitPromise: document.querySelector('button[type="submit"]'),
};

function createPromise(amount, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(amount, delay);
      } else {
        reject(amount, delay);
      }
    }, delay);
  });
  return promise;
}

refs.btnSubmitPromise.addEventListener('click', onBtnSubmitPromiseClick);

function onBtnSubmitPromiseClick(evt) {
  evt.preventDefault();
  let firstDelay = Number(refs.inputDelay.value);
  let delayStep = Number(refs.inputStep.value);
  for (let i = 0; i < refs.inputAmount.value; i += 1) {
    createPromise(1 + i, firstDelay + i * delayStep)
      .then((amount, delay) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${amount} in ${delay}ms`);
      })
      .catch((amount, delay) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${amount} in ${delay}ms`);
      });
  }
}
