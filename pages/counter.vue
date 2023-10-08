<script setup>
const counter = useState("counter", () => 1);
const color = useColor();
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
    <p>Current Color: {{ color }}</p>
    <Counter />
  </div>
</template>
