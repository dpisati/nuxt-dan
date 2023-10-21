// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxt/content", "@pinia/nuxt"],
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devtools: { enabled: true },
  ssr: false,
});
