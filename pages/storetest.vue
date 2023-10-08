<script setup>
import { useCounterStore } from "~/stores/myStore";
const store = useCounterStore();

const { data, pending } = await useAsyncData("teller", () =>
  $fetch("/api/teller")
);

const refresh = () => refreshNuxtData("teller");
</script>

<template>
  <div>
    <h1>Store Test</h1>
    <p>Count: {{ store.count }}</p>
    <p>Name: {{ store.name }}</p>
    <p>Count * 2: {{ store.doubleCount }}</p>
    <p><button @click="store.increment">Inc</button></p>

    <hr />

    <p>Page Visits: {{ pending ? "????" : data.teller }}</p>
    <p><button @click="refresh">Refresh</button></p>
  </div>
</template>
