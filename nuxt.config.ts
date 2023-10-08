// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Nuxt Test Title",
      meta: [
        {
          name: "description",
          content: "Nuxt Test Description",
        },
        {
          name: "X-MyHeader",
          content: "Content of X-MyHeader",
        },
      ],
      link: [],
      style: [],
      script: [],
    },
  },
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/"),
    //assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@pinia/nuxt"],
  content: {
    //base: "/content",
    watch: false,
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  routeRules: {
    "/api/**": {
      ssr: true,
      headers: { "X-Extra": "Extra Header", "cache-control": " s-maxage=0" },
    },
    "/old": { redirect: "/" },
    "/assets": {
      headers: { "X-Extra": "Asset", "cache-control": " s-maxage=1" },
    },
  },
  ssr: true,
});
