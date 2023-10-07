<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<template>
  <div>
    <h1>Custom Page</h1>
    <Alert />

    <p>
      {{ $Hello("from myPlugin !!") }}
    </p>

    <IconsPacman />
    <img src="~/assets/pacman.jpg" alt="Pacman" />
  </div>
</template>
