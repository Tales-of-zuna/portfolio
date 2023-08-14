// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/portfolio/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets",
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "dayjs-nuxt"],
});
