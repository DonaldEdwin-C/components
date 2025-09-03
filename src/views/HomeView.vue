<template>
  <div>
    {{ $store.state.counter }}
  </div>
  <div>
    <button @click="$store.commit('increasecounter')">+</button>
    <button @click="$store.commit('decreasecounter')">-</button>
  </div>
</template>

<script>
export default {}
</script>
