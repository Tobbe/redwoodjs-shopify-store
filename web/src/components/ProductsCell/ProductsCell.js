export const QUERY = gql`
  query {
    products: getProducts {
      handle
      title
      price {
        amount
        currencyCode
      }
      images {
        altText
        src
      }
    }
  }
`

export const Loading = () => <div>Fetching swag...</div>

export const Empty = () => <div>No swag found 😞</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ products }) => {
  return products.map((product) => (
    <div style={{ padding: '1em' }} key={product.handle}>
      <img
        src={product.images[0].src}
        alt={product.images[0].altText}
        style={{ width: '100px', height: '100px' }}
      />
      <p>{product.title}</p>
      <p>
        {product.price.amount} {product.price.currencyCode}
      </p>
    </div>
  ))
}
