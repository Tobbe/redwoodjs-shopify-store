const PRODUCTS = [
  {
    id: 'product-id-one',
    handle: 'product-handle-one',
    availableForSale: true,
    description: 'Product Description One',
    title: 'Title One',
    price: {
      min: {
        amount: 9.99,
        currencyCode: 'USD',
      },
      max: {
        amount: 14.99,
        currencyCode: 'USD',
      },
    },
    images: [
      {
        altText: 'Image 1',
        src: 'https://picsum.photos/200/200.jpg',
      },
      {
        altText: 'Image 2',
        src: 'https://picsum.photos/200/200.jpg',
      },
    ],
  },
  {
    id: 'product-id-two',
    handle: 'product-handle-two',
    availableForSale: true,
    description: 'Product Description Two',
    title: 'Title Two',
    price: {
      min: {
        amount: 9.99,
        currencyCode: 'USD',
      },
      max: {
        amount: 14.99,
        currencyCode: 'USD',
      },
    },
    images: [
      {
        altText: 'Image 1',
        src: 'https://picsum.photos/200/200.jpg',
      },
    ],
  },
]

export const getProducts = () => {
  console.log('getProducts')
  return PRODUCTS
}

export const getProduct = ({ id }) => {
  return PRODUCTS[0]
}

export const addToCheckout = ({ id, item }) => {
  return {
    items: [ item ],
    totalPrice: {
      amount: 9.99,
      currencyCode: 'USD',
    }
  }
}
