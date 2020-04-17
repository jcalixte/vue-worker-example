<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button>Am I clickable?</button>
    <section class="result-container">
      <div class="result without-webworker">
        <label for="without-webworker">Without web worker</label>
        <input
          type="number"
          id="without-webworker"
          name="without-webworker"
          v-model="final"
          max="45"
        />
        <div>{{ count }}</div>
      </div>
      <div class="result with-webworker">
        <label for="with-webworker">With web worker</label>
        <input
          type="number"
          id="with-webworker"
          name="with-webworker"
          v-model="wwFinal"
          max="45"
        />
        <div>{{ wwCount }}</div>
      </div>
    </section>
  </div>
</template>

<script>
import { helloWorld } from '@/workers/utils.worker'
import { debounce } from 'lodash-es'
import { fibonacci } from '@/utils/utils'
import { wwFibonacci } from '@/workers/utils.worker'

const debounceFibonacci = debounce((instance, final) => {
  if (!final) {
    return
  }
  instance.count = fibonacci(final)
}, 250)

const debounceFibonacciAsync = debounce(async (instance, final) => {
  if (!final) {
    return
  }
  instance.wwCount = await wwFibonacci(final)
}, 250)

export default {
  name: 'HelloWorld',
  data: () => ({
    msg: '',
    final: 0,
    wwFinal: 0,
    count: 0,
    wwCount: 0
  }),
  async mounted() {
    this.msg = await helloWorld()
  },
  watch: {
    final(final) {
      debounceFibonacci(this, final)
    },
    wwFinal(final) {
      debounceFibonacciAsync(this, final)
    }
  }
}
</script>

<style scoped>
.result-container {
  display: flex;
}
.result {
  flex: 1;
}
</style>
