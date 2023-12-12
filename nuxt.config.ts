import { pwa, supabase, content, stripe } from "./config";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/supabase', '@nuxt/image', "@vite-pwa/nuxt", '@nuxtseo/module', 'nuxt-schema-org', '@unlok-co/nuxt-stripe'],
  site: {
    url: 'https://haste.mgm12.dev',
    name: 'HaStE',
  },
  ui: {
    icons: ["mdi"]
  },
  pwa,
  supabase,
  content,
  stripe,
})
