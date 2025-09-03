<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import UserCard from '@/components/UserCard.vue'
import Card from '@/components/Card.vue'
import Counter from '@/components/Counter.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

const countVal = ref(0)

const currentView = ref(Login)
function toggle() {
  currentView.value = currentView.value === Login ? Signup : Login
}
</script>

<template>
  <div class="learning">
    <!-- 1. Component Basics -->
    <section>
      <h2>Components Basics</h2>
      <ButtonComponent label="Click" />
      <ButtonComponent label="Submit" />
    </section>

    <!-- 2. Single File Component + Props -->
    <section>
      <h2>Single File Component + Props</h2>
      <UserCard :user="{ name: 'Alice', age: 25 }" />
    </section>

    <!-- 3. Dynamic Components -->
    <section>
      <h2>Dynamic Components</h2>
      <component :is="currentView" />
      <button @click="toggle">Switch</button>
    </section>

    <!-- 4. Slots -->
    <section>
      <h2>Slots</h2>
      <Card>
        <template #header><h3>Profile Card</h3></template>
        <p>Main body content goes here.</p>
        <template #footer><button>Close</button></template>
      </Card>
    </section>

    <!-- 5. Events -->
    <section>
      <h2>Events</h2>
      <Counter @update="(val) => (countVal = val)" />
      <p>Parent received count: {{ countVal }}</p>
    </section>
  </div>
  <RouterView />
</template>
