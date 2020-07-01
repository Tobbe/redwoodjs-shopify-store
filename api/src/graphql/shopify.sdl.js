export const schema = gql`
  type Money {
    amount: Float!
    currencyCode: String!
  }

  type MoneyRange {
    min: Money!
    max: Money!
  }

  type Image {
    altText: String
    src: String
  }

  type Product {
    id: String!
    handle: String!
    availableForSale: Boolean!
    description: String!
    title: String!
    price: MoneyRange!
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
    getProduct(id: String!): Product
  }

  type Mutation {
    addToCheckout(checkoutItem: CheckoutInput): Checkout!
  }
`
