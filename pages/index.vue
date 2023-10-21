<script setup lang="ts">
import { useCounterStore } from '~/stores/myStore';

const { $hello } = useNuxtApp()
const counter = useCounter()
const store = useCounterStore()



const { data: message, pending } = await useLazyFetch('/api/hello', {
  transform: (_message) => _message.data,
})


$hello('Daniel')

</script>

<template>
  <div class="flex gap-12 p-10">
    <h2>Status: {{  pending  }}</h2>
    <h2>result: {{  pending ? 'Loading...' : message  }}</h2>
  </div>
  <div class="flex gap-12 p-10">
  <h2>Counter {{ counter }}</h2>
  
  <button @click="counter++">Increment</button>
  <button @click="counter--">Decrement</button>
</div>
<div class="flex gap-12 p-10">
<h2>Pinia Counter: {{ store.counter }}</h2>
<h2>Pinia Name: {{ store.name }}</h2>
<button @click="store.increment">Increment</button>
  <button @click="store.decrement">Decrement</button>
</div>
  <ul>
    <li>
      <nuxt-link to="/about">About</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </li>
  </ul>
  <ContentDoc />
</template>