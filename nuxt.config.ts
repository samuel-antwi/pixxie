// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    'nuxt-headlessui',
  ],
  devServer: {},

  googleFonts: {
    families: {
      Inter: true,
    },
  },
})
