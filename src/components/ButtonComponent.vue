<template>
  <button class="btn">{{ label }}</button>
</template>

<script setup>
const props = defineProps({ label: String })
</script>
