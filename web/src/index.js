import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import { ShopifyContextProvider } from 'src/context/ShopifyContext'
import CheckoutCreator from 'src/components/CheckoutCreator'

import './index.css'

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ShopifyContextProvider>
        <CheckoutCreator />
        <Routes />
      </ShopifyContextProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
