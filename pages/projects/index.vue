<script setup lang="ts">

definePageMeta({
  middleware: 'auth'
})

</script>

<template>
  <div>Projects - Auth</div>
  <ul>
    <li>
      <nuxt-link to="/">Home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/contact">Contact</nuxt-link>
    </li>
  </ul>
</template>