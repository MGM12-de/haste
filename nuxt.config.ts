import { pwa, supabase, content } from "./config";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/supabase', '@nuxt/image', "@vite-pwa/nuxt",'nuxt-schema-org'],
  site: {
    url: 'https://haste.mgm12.dev',
    name: 'HaStE',
  },
  pwa,
  supabase,
  content,
})
