<script setup>
const counter = useState("counter", () => 1);
const color = useColor();
</script>

<template>
  <div>
    <Head>
      <Title>{{ color }}</Title>
      <Meta name="description" content="This Is The Counter Page" />
      <Meta name="whatever" :content="color" />
    </Head>
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
