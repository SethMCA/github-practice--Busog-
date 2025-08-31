import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Add new module
  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],
})
