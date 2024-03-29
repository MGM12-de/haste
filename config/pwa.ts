import type { ModuleOptions } from '@vite-pwa/nuxt'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  manifest: {
    categories: ['handball', 'statistics', 'sport'],
    name: 'Handball statistic expert',
    short_name: 'HaStE',
    description: 'Handball statistics App',
    theme_color: '#ffbf00',
    background_color: '#808080',
    scope: '/',
    start_url: '/',
    display: 'standalone',
    lang: 'en',
    orientation: 'portrait',
    icons: [
      {
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      },
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'maskable-icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  includeAssets: ['**/*'],
  workbox: {
    navigateFallback: '/',
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  },
  client: {
    installPrompt: true,
    periodicSyncForUpdates: 3600,
  },
  devOptions: {
    enabled: true,
    suppressWarnings: true,
    navigateFallbackAllowlist: [/^\/$/],
    type: 'module',
  },
}
