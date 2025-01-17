// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-aos",
    "nuxt-icon",
  ],
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
      title: "Acceleron Marketing, Where Digital Brands Transform And Thrive",
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
          content:
            "Acceleron Marketing specializes in driving innovation and growth in the ever growing digital landscape",
        },
        {
          "http-equiv": "Content-Security-Policy",
          content: "block-all-mixed-content",
        },
        { name: "og:title", content: "Acceleron Marketing" },
        {
          name: "og:description",
          content:
            "Acceleron Marketing specializes in driving innovation and growth in the ever growing digital landscape",
        },
        {
          name: "og:image",
          content: "/images/acceleron_logo.webp",
        },
        {
          name: "twitter:image",
          content: "/images/acceleron_logo.webp",
        },
      ],
      link: [{ rel: "canonical", href: "https://www.acceleronmarketing.com" }],
    },
  },
});
