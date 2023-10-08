<script setup>
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();
</script>

<template>
  <div>
    <h1>Store Test</h1>
    <p>Count: {{ store.count }}</p>
    <p>Name: {{ store.name }}</p>
    <p>Count * 2: {{ store.doubleCount }}</p>
    <p><button @click="store.increment">Inc</button></p>
  </div>
</template>
