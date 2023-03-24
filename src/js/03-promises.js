const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
console.log(form.delay);
let step = form.step.value;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        // Fulfill
      } else {
        // Reject
        reject({ position, delay });
      }
    }, form.delay.value + step);
  });
}

function handleSubmit(evt) {
  evt.preventDefault();
  let delay = Number(form.delay.value);
  let step = Number(form.step.value);
  let amount = Number(form.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
