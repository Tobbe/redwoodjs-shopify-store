import { Link, routes } from '@redwoodjs/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const StoreLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>RedwoodJS Shopify Store</Link>
        </h1>
        <nav>
          <Link to={routes.cart()}>
            <FontAwesomeIcon icon={faShoppingCart} style={{ fontSize: '1.6em' }} />
            <span style={{ padding: '0 1em' }}># items</span>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default StoreLayout
