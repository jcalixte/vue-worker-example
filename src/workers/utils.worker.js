import { fibonacci } from '@/utils/utils'

export const helloWorld = async () => {
  return 'Hello World from web worker'
}

export const wwFibonacci = async (count) => {
  return fibonacci(count)
}
