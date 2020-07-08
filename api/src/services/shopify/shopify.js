const fetch = require('node-fetch')
const shopify = require('shopify-buy')

const shopifyClient = shopify.buildClient(
  {
    storefrontAccessToken: process.env.SHOPIFY_TOKEN,
    domain: process.env.SHOPIFY_DOMAIN,
  },
  fetch
)

export const getProducts = async () => {
  const products = (await shopifyClient.product.fetchAll())
    .filter((product) => product.availableForSale)
    .map((product) => ({
      ...product,
      price: product.variants[0].priceV2,
      variants: product.variants.map((variant) => ({
        ...variant,
        price: variant.priceV2,
      })),
    }))

  return products
}

export const getProduct = async ({ handle }) => {
  const product = await shopifyClient.product.fetchByHandle(handle)

  return { ...product, price: product.variants[0].priceV2 }
}

export const createCheckout = async () => {
  const checkout = await shopifyClient.checkout.create()

  return {
    id: checkout.id,
    webUrl: checkout.webUrl,
  }
}

export const getCheckout = async ({ checkoutId }) => {
  const checkout = await shopifyClient.checkout.fetch(checkoutId)

  if (checkout.lineItems.length === 0) {
    return null;
  }

  return {
    items: checkout.lineItems.map((item) => ({
      quantity: item.quantity,
      title: item.title,
      price: item.variant.priceV2,
      image: item.variant.image,
    })),
    totalPrice: checkout.totalPriceV2,
  }
}

export const addToCheckout = async ({ checkoutId, variantId }) => {
  const checkout = await shopifyClient.checkout.addLineItems(checkoutId, [
    { variantId, quantity: 1 },
  ])

  return {
    items: checkout.lineItems,
    totalPrice: checkout.totalPriceV2,
  }
}
