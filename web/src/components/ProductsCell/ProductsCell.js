import { Link, routes } from '@redwoodjs/router'

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

export const Loading = () => <div>Fetching products...</div>

export const Empty = () => <div>No products found 😞</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ products }) => {
  return products.map((product) => (
    <div style={{ padding: '1em' }} key={product.handle}>
      <Link to={routes.product({ handle: product.handle })}>
        <img
          src={product.images[0].src}
          alt={product.images[0].altText}
          style={{ width: '100px', height: '100px' }}
        />
        <p>{product.title}</p>
        <p>
          {product.price.amount} {product.price.currencyCode}
        </p>
      </Link>
    </div>
  ))
}
