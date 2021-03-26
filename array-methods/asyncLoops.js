const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function doTheStuff() {
  const values = ['a', 'b', 'c'];
  // for (let i = 0; i < values.length; i += 1) {
  //   console.log(values[i]);
  //   // eslint-disable-next-line no-await-in-loop
  //   await sleep(1000);
  // }
  // values.forEach(async (value) => {
  //   console.log(value);
  //   await sleep(1000);
  // });
  // values.reduce(async (promise, value) => {
  //   await promise;
  //   console.log(value);
  //   await sleep(1000);
  // }, Promise.resolve());
  }

doTheStuff();
