import { useApolloClient } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { ShopifyContext } from 'src/context/ShopifyContext'

const GET_CHECKOUT = gql`
  query($checkoutId: String!) {
    getCheckout(checkoutId: $checkoutId) {
      items {
        title
      }
    }
  }
`

const StoreLayout = ({ children }) => {
  const shopifyContext = React.useContext(ShopifyContext)
  const client = useApolloClient()

  React.useEffect(() => {
    const checkoutId = shopifyContext.state.checkoutId

    if (!checkoutId || shopifyContext.state.cartItemsCount !== '#') {
      return;
    }

    console.log('checkoutId', checkoutId)

    if (checkoutId) {
      client
        .query({
          query: GET_CHECKOUT,
          variables: { checkoutId: shopifyContext.state.checkoutId },
        })
        .then(({ data }) => {
          const cartItemsCount = data.getCheckout.items.length
          if (cartItemsCount !== shopifyContext.state.cartItemsCount) {
            shopifyContext.setState({
              cartItemsCount,
            })
          }
        })
    }
  }, [
    client,
    shopifyContext.state.checkoutId,
    shopifyContext.state.cartItemsCount,
  ])

  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>RedwoodJS Shopify Store</Link>
        </h1>
        <nav>
          <Link to={routes.cart()}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: '1.6em' }}
            />
            <span style={{ padding: '0 1em' }}>
              {shopifyContext.state.cartItemsCount} items
            </span>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default StoreLayout
