import { pwa, supabase, content } from "./config";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["@nuxt/ui-pro"],
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/supabase', '@nuxt/image', "@vite-pwa/nuxt"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { hid: 'description', name: 'description', content: 'Handball statistic expert' },
        { hid: 'og:title', property: 'og:title', content: 'HaStE' },
        { hid: 'og:description', property: 'og:description', content: 'Handball statistic expert' },
        { hid: 'og:image', property: 'og:image', content: '/logo.png' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'HaStE' },
        { hid: 'og:image:width', property: 'og:image:width', content: '500' },
        { hid: 'og:image:height', property: 'og:image:height', content: '500' },
        { hid: 'og:locale', property: 'og:locale', content: 'en_US' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:title', property: 'twitter:title', content: 'HaStE' },
        { hid: 'twitter:description', property: 'twitter:description', content: 'Handball statistic expert' },
        { hid: 'twitter:image', property: 'twitter:image', content: '/logo.png' },
        { hid: 'twitter:image:alt', property: 'twitter:image:alt', content: 'HaStE' },
      ],
      title: 'HaStE', 
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  pwa,
  supabase,
  content,
})
