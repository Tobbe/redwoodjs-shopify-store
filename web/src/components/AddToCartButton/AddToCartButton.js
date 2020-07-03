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

const AddToCartButton = ({ product }) => {
  const shopifyContext = React.useContext(ShopifyContext)
  const [addToCart] = useMutation(ADD_TO_CHECKOUT)

  const onClick = () => {
    addToCart({
      variables: {
        checkoutId: shopifyContext.state.checkoutId,
        variantId: product.variants[0].id,
      },
    }).then(({ data }) => {
      console.log('setState length', data.checkout.items.length);
      shopifyContext.setState({ cartItemsCount: data.checkout.items.length })
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
