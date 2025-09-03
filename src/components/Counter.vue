<template>
  <button @click="increase">Count: {{ count }}</button>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
const emit = defineEmits(['update'])

function increase() {
  count.value++
  emit('update', count.value)
}
</script>
