<script setup lang="ts">
const { $Hello } = useNuxtApp();

definePageMeta({
  middleware: "middle",
});

console.log($Hello("also from myPlugin !"));
</script>

<template>
  <div>
    <h1>My Profile</h1>
  </div>
</template>
