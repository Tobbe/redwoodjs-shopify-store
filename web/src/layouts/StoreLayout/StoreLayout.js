import { Link, routes } from '@redwoodjs/router'

const StoreLayout = ({ children }) => {
  return (
    <>
      <header>
        <h1>
          <Link to={routes.home()}>RedwoodJS Shopify Store</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to={routes.cart()}>Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default StoreLayout
