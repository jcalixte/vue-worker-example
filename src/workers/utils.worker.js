export const helloWorld = async () => {
  return 'Hello World from web worker'
}

const fibonacci = (count) => {
  if (count === 0 || count === 1) {
    return count
  }
  return fibonacci(count - 1) + fibonacci(count - 2)
}

export const wwFibonacci = async (count) => {
  return fibonacci(count)
}
