import Stripe from "stripe";

const stripeSecreteKey = process.env.STRIPE_SECRETE_KEY || ''

export const stripe = new Stripe(stripeSecreteKey, {
    apiVersion: '2024-04-10',
    appInfo: {
        name: 'Ignite Shop'
    }
})