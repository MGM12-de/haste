import type { ModuleOptions } from "@nuxtjs/supabase";


export const supabase: ModuleOptions = {
  // redirect: true,
  redirectOptions: {
    login: '/login',
    callback: '/confirm',
    exclude: ['/', '/prices', '/about', '/imprint', '/contact'],
  }
}