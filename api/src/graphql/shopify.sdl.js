export const schema = gql`
  type Money {
    amount: Float!
    currencyCode: String!
  }

  type Image {
    altText: String
    src: String
  }

  type Product {
    handle: String!
    description: String!
    title: String!
    price: Money!
    images: [Image]!
  }

  type CheckoutItem {
    variantId: String!
    quantity: Int!
  }

  type Checkout {
    items: [CheckoutItem]!
    totalPrice: Money!
  }

  input CheckoutInput {
    checkoutId: String!
    variantId: String!
    quantity: Int!
  }

  type Query {
    getProducts: [Product]!
    getProduct(handle: String!): Product
  }

  type Mutation {
    createCheckout: String
    addToCheckout(checkoutItem: CheckoutInput): Checkout!
  }
`
