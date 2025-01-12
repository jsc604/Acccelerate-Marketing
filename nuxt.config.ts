// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-aos"],
  googleFonts: {
    families: {
      Rubik: {
        wght: [400],
      },
      Orbitron: {
        wght: [600],
      },
    },
  },
  app: {
    head: {
      title: "Accelerate Marketing",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content: "block-all-mixed-content",
        },
        { name: "og:title", content: "Accelerate Marketing" },
        {
          name: "og:description",
          content: "",
        },
      ],
    },
  },
});
