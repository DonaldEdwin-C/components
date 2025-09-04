<template>
  <div>
    {{ $store.state.counter }}
  </div>
  <div>
    <button @click="$store.commit('increasecounter')">+</button>
    <button @click="$store.commit('decreasecounter')">-</button>
  </div>
  <div>
    <p>Original message: {{ message }}</p>
    <p>Reversed message: {{ reversedMessage }}</p>
  </div>
  Watchers Watchers, on the other hand, provide a way to observe and react to changes in specific
  data sources. Unlike computed properties, which are primarily declarative, watchers are imperative
  and are typically used when a change in data must trigger a side effect. This includes
  asynchronous operations, logging, or API calls.
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue',
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
  },
}
</script>
