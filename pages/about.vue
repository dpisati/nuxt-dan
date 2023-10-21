<script setup lang="ts">
definePageMeta({
  layout: 'custom'
})
const counter = useCounter()

</script>

<template>
  <div>about</div>
  <div class="flex gap-12 p-10">
  <h2>Counter {{ counter }}</h2>
  <button @click="counter++">Increment</button>
  <button @click="counter--">Decrement</button>
</div>
  <ul>
    <li>
      <nuxt-link to="/">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </li>
  </ul>
  <img src="@/assets/images/1.png" />
</template>