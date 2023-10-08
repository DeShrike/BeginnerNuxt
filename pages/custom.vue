<script setup>
definePageMeta({
  layout: "custom",
});

const counter2 = useCounter();
</script>

<template>
  <div>
    <h1>Custom Page</h1>
    <Alert />

    <ContentDoc />

    <p>Counter 2: {{ counter2 }}</p>

    <p>
      {{ $Hello("from myPlugin !!") }}
    </p>

    <IconsPacman />
    <img src="~/assets/pacman.jpg" alt="Pacman" width="300" />
  </div>
</template>
