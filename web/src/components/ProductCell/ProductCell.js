export const QUERY = gql`
  query GET_PRODUCT($handle: String!) {
    product: getProduct(handle: $handle) {
      title
      images {
        altText
        src
      }
      price {
        amount
        currencyCode
      }
    }
  }
`

export const Loading = () => <div>Loading Product...</div>

export const Empty = () => <div>No product found</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <img
        src={product.images[0].src}
        alt={product.images[0].altText}
      />
      <p>
        {product.price.amount} {product.price.currencyCode}
      </p>
    </div>
  )
}
