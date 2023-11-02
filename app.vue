<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
useSeoMeta({
  title: "Halloween Particle Pumpkin 🎃",
  ogTitle: "Halloween Particle Pumpkin 🎃",
  ogUrl: "https://pumpkin.three.dronsman.com/",
  description: "A 3D pumpkin made with Tres.js, a 3D library for Vue.js.",
  ogDescription: "A 3D pumpkin made with Tres.js, a 3D library for Vue.js.",
  ogImage: "https://pumpkin.three.dronsman.com/og-image.png",
  twitterTitle: "Halloween Particle Pumpkin 🎃",
  twitterDescription:
    "A 3D pumpkin made with Tres.js, a 3D library for Vue.js.",
  twitterImage: "https://pumpkin.three.dronsman.com/og-image.png",
  twitterCard: "summary_large_image",
});
</script>
