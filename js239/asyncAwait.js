function callback1() {
  console.log('callback1');
}

function callback2() {
  console.log('callback2');
}

function callback3() {
  console.log('callback3');
}

function randomizer(...callbacks) {
  let times = callbacks.map(_ => Math.random() * callbacks.length * 2);

  callbacks.forEach((callback, ind) => {
    setTimeout(() => {
      callback()
    }, times[ind] * 1000);
  })
}

// randomizer(callback1, callback2, callback3);

// Output:
// 1
// 2
// "callback2"
// 3
// "callback3"
// 4
// 5
// "callback1"
// 6





























































