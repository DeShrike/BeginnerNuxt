<script setup>
const data1 = await $fetch("api/hello");
const data2 = await $fetch("/hello");
</script>

<template>
  <div>
    <p>Name: {{ data1.name }}</p>
    <p>ID: {{ data1.id }}</p>
    <hr />
    <p>Name: {{ data2.name }}</p>
    <p>ID: {{ data2.id }}</p>
  </div>
</template>
