<template>
  <nav class="flex justify-between items-center">    
    <h1>My Portfolio</h1>
    <NuxtLink to="/">Home</NuxtLink>
    <ul class="flex gap-12">
      <li>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects/1">Project 1</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects/2">Project 2</NuxtLink>
      </li>
    </ul>
  </nav>
</template>