function debounce(func, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), delay)
  }
}

let debounced = debounce((text) => console.log(text), 2000)

debounced('First')
debounced('Second')

setTimeout(() => debounced('Third'), 4000)
