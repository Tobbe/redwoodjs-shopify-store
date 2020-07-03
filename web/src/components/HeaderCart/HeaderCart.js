import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { ShopifyContext } from 'src/context/ShopifyContext'

const HeaderCart = () => {
  const shopifyContext = React.useContext(ShopifyContext)

  return (
    <>
      <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.6em' }} />
      <span style={{ padding: '0 1em' }}>
        {shopifyContext.state.cartItemsCount} items
      </span>
    </>
  )
}

export default HeaderCart
