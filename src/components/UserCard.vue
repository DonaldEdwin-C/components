<template>
  <p>{{ user.name }} ({{ user.age }} years old)</p>
</template>

<script setup>
const props = defineProps({ user: Object })
</script>
