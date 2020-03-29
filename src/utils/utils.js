export const fibonacci = (count) => {
  if (count <= 1) {
    return Math.max(0, count)
  }

  return fibonacci(count - 1) + fibonacci(count - 2)
}
