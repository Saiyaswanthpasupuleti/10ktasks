const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject(4);
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log(results); // Outputs: [1, 2, 3]
  })
  .catch(error => {
    console.error(error);
  });