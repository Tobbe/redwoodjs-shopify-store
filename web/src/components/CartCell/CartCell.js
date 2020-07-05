export const QUERY = gql`
  query($checkoutId: String!) {
    cart: getCheckout(checkoutId: $checkoutId) {
      items {
        title
        quantity
        price {
          amount
          currencyCode
        }
        image {
          altText
          src
        }
      }
      totalPrice {
        amount
        currencyCode
      }
    }
  }
`

function money(price, quantity = 1) {
  return '' + price.amount * quantity + ' ' + price.currencyCode
}

export const beforeQuery = (props) => {
  // TODO: Better to invalidate cache when needed
  return {
    variables: props,
    fetchPolicy: 'network-only',
  }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error, variables }) => {
  if (!variables.checkoutId) {
    return <Loading />
  }

  return <div>Error: {error.message}</div>
}

export const Success = ({ cart }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.image.src}
                  alt={item.image.altText}
                  width="60"
                  height="60"
                  style={{ verticalAlign: 'middle', paddingRight: '1em' }}
                />
                <p style={{ verticalAlign: 'middle', display: 'inline-block' }}>
                  {item.title}
                </p>
              </td>
              <td>{item.quantity}</td>
              <td>{money(item.price)}</td>
              <td>{money(item.price, item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      Sub total: {money(cart.totalPrice)}
    </>
  )
}
