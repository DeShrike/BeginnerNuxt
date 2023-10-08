<script setup>
const { sayHello } = useUtils();
sayHello();
</script>

<template>
  <div>
    <h1>Index Page</h1>
    <Alert />
    <Profile />

    <ContentDoc />

    <IconsMario />
    <img src="~/assets/mario.jpg" alt="Mario" width="200" />
  </div>
</template>
