import AddToCartButton from 'src/components/AddToCartButton'

export const QUERY = gql`
  query GET_PRODUCT($handle: String!) {
    product: getProduct(handle: $handle) {
      title
      description
      images {
        altText
        src
      }
      price {
        amount
        currencyCode
      }
      variants {
        title
        id
      }
    }
  }
`

export const Loading = () => <div>Loading Product...</div>

export const Empty = () => <div>No product found</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ product }) => {
  const [variantId, setVariantId] = React.useState(product.variants[0].id)

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0].src} alt={product.images[0].altText} />
      <p>{product.description}</p>
      <p>
        {product.price.amount} {product.price.currencyCode}
      </p>
      <div style={{ marginBottom: '1em' }}>
        <label htmlFor="variant-select" style={{ paddingRight: '0.4em' }}>
          Variant:
        </label>
        <select
          id="variant-select"
          value={variantId}
          onChange={(e) => {
            console.log('yo', e)
            setVariantId(e.target.value)
          }}
        >
          {product.variants.map((variant) => (
            <option value={variant.id} key={variant.id}>
              {variant.title}
            </option>
          ))}
        </select>
      </div>
      <AddToCartButton variantId={variantId} />
    </div>
  )
}
