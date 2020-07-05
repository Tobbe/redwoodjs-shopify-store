import StoreLayout from 'src/layouts/StoreLayout'
import CartCell, { Loading as CartLoading } from 'src/components/CartCell'
import { ShopifyContext } from 'src/context/ShopifyContext'

const CartPage = () => {
  const shopifyContext = React.useContext(ShopifyContext)
  const checkoutId = shopifyContext.state.checkoutId;

  return (
    <StoreLayout>
      <h1>Your Shopping Cart</h1>
      {checkoutId && <CartCell checkoutId={checkoutId} />}
      {!checkoutId && <CartLoading />}
    </StoreLayout>
  )
}

export default CartPage
