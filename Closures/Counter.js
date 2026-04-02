// Create a counter with closure

function makeCounter(init = 0) {
  let count = init;

  return {
    increment: () => count++,
    decrement: () => count > 0 ? count-- : 0,
    value: () => count
  }
}

let counter = makeCounter();
counter.increment()
counter.increment()

counter.increment()
counter.decrement()
counter.decrement()
counter.decrement()

counter.decrement()


console.log(counter.value())
