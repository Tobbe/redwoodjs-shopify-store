import { useMutation } from '@redwoodjs/web'

import { ShopifyContext } from 'src/context/ShopifyContext'

const ADD_TO_CHECKOUT = gql`
  mutation($checkoutId: String!, $variantId: String!) {
    checkout: addToCheckout(checkoutId: $checkoutId, variantId: $variantId) {
      items {
        title
        quantity
      }
      totalPrice {
        amount
        currencyCode
      }
    }
  }
`

const AddToCartButton = ({ variantId }) => {
  const shopifyContext = React.useContext(ShopifyContext)
  const [addToCart] = useMutation(ADD_TO_CHECKOUT)

  const onClick = () => {
    addToCart({
      variables: {
        checkoutId: shopifyContext.state.checkoutId,
        variantId,
      },
    }).then(({ data }) => {
      console.log('data', data)
      const cartItemsCount = data.checkout.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
      console.log('cartItemsCount', cartItemsCount)
      shopifyContext.setState({ cartItemsCount })
    })
  }

  return (
    <button
      style={{
        padding: '0.6em 0.8em',
        backgroundColor: 'blue',
        color: 'white',
        border: '1px solid darkblue',
        borderRadius: '4px',
      }}
      onClick={onClick}
    >
      Add to Cart
    </button>
  )
}

export default AddToCartButton
