export const schema = gql`
  type Money {
    amount: Float!
    currencyCode: String!
  }

  type Image {
    altText: String
    src: String
  }

  type ProductVariant {
    title: String!
    id: String!
    price: Money!
  }

  type Product {
    handle: String!
    description: String!
    title: String!
    price: Money!
    images: [Image]!
    variants: [ProductVariant]!
  }

  type CheckoutLineItem {
    quantity: Int!
    title: String!
    price: Money!
    image: Image
  }

  type Checkout {
    items: [CheckoutLineItem]
    totalPrice: Money
    id: String
    webUrl: String
  }

  type Query {
    getProducts: [Product]!
    getProduct(handle: String!): Product
    getCheckout(checkoutId: String!): Checkout
  }

  type Mutation {
    createCheckout: Checkout!
    addToCheckout(checkoutId: String!, variantId: String!): Checkout!
  }
`
