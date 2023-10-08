<script setup>
const counter = useCounter();
</script>

<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <p>
      <button @click="counter++">Inc</button>
    </p>
    <p>
      <button @click="counter--">Dec</button>
    </p>
  </div>
</template>
