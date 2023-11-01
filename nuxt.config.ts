import glsl from "vite-plugin-glsl";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Halloween Pumpkin",
      meta: [
        {
          name: "description",
          content:
            "A Halloween Pumpkin that is created with Three.JS, TresJS and WebGL using particles and shaders",
        },
      ],
    },
  },

  modules: [
    "@nuxt/devtools",
    "@nuxt/ui",
    "@tresjs/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        prefetch: true,
        download: true,
        families: {
          "Maven+Pro": [400, 500, 700],
        },
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],

  imports: {
    dirs: ["stores"],
  },

  vite: {
    plugins: [glsl()],
  },
});
