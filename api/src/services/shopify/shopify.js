const fetch = require('node-fetch')
const shopify = require('shopify-buy')

const DOMAIN = 'tobbe-trial-one.myshopify.com'

const shopifyClient = shopify.buildClient(
  {
    storefrontAccessToken: process.env.SHOPIFY_TOKEN,
    domain: DOMAIN,
  },
  fetch
)

export const getProducts = async () => {
  const products = (await shopifyClient.product.fetchAll())
    .filter((product) => product.availableForSale)
    .map((product) => ({ ...product, price: product.variants[0].priceV2 }))

  return products
}

export const getProduct = async ({ handle }) => {
  const product = await shopifyClient.product.fetchByHandle(handle)

  return { ...product, price: product.variants[0].priceV2 }
}

export const createCheckout = async () => {
  const checkout = await shopifyClient.checkout.create();

  return checkout.id;
}

export const addToCheckout = ({ id, item }) => {
  return {
    items: [item],
    totalPrice: {
      amount: 9.99,
      currencyCode: 'USD',
    },
  }
}
