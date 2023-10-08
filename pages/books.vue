<script setup>
const { data: books, pending } = await useLazyFetch("/api/books", {
  transform: (_books) => _books.data,
});

console.log(toRaw(books.value));

useHead({
  title: "My Books",
  meta: [{ name: "description", content: "These are my books" }],
  bodyAttrs: { class: "books-page" },
});
</script>

<template>
  <div>
    <p>{{ pending ? "Loading" : "" }}</p>

    <ul>
      <li v-for="book in books" :key="book.id">
        {{ book.name }} - {{ book.author }}
      </li>
    </ul>
  </div>
</template>
