<script setup>
const { sayHello } = useUtils()

sayHello()
</script>

<template>
  <div>  
    <IconsBell />
      <p>project slug: {{ $route.params.slug }}</p>     
  </div>
</template>