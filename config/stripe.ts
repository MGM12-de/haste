import type { ModuleOptions } from "@unlok-co/nuxt-stripe";
const STRIPE_KEY = process.env.STRIPE_KEY || ""; // Replace "" with a default value if needed

export const stripe: ModuleOptions = {
    server: {
        key: STRIPE_KEY,
        options: {
            // your api options override for stripe server side
            apiVersion: '2022-11-15', // optional, default is '2022-11-15'
        }
        // CLIENT
    },
    client: {
        key: STRIPE_KEY,
        // your api options override for stripe client side
        options: {

        }
    }
};