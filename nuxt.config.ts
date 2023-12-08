import { pwa, supabase } from "./config";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ['@nuxt/ui', '@nuxtjs/supabase', '@nuxt/image', "@vite-pwa/nuxt"],
  pwa,
  supabase,
})
