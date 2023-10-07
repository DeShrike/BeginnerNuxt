<script setup>
const route = useRoute();
const id = route.params.id;

const nuxtApp = useNuxtApp();

console.log("nuxtApp");
console.log(nuxtApp);
</script>

<template>
  <div>
    <h1>Event</h1>
    <h2>Id: {{ $route.params.id }}</h2>
  </div>
</template>
