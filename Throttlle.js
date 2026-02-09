function throttle(func, interval) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => {inThrottle = false}, interval)
    }
  }
}

let throttledCall = throttle(() => console.log(new Date()), 2000)

let interval = setInterval(() => throttledCall(), 100)

setTimeout(() => clearInterval(interval), 7000)
