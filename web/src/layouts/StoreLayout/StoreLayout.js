import { Link, routes } from '@redwoodjs/router'
import HeaderCart from 'src/components/HeaderCart/HeaderCart'

const StoreLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>RedwoodJS Shopify Store</Link>
        </h1>
        <nav>
          <Link to={routes.cart()}>
            <HeaderCart />
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default StoreLayout
