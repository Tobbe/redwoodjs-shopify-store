import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary, useMutation } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import { ShopifyContextProvider, ShopifyContext } from 'src/context/ShopifyContext'
import Routes from 'src/Routes'

import './index.css'

const CREATE_CHECKOUT = gql`
  mutation {
    checkoutId: createCheckout
  }
`

const App = () => {
  const shopifyContext = React.useContext(ShopifyContext)
  const [createCheckout] = useMutation(CREATE_CHECKOUT);

  React.useEffect(() => {
    createCheckout().then(({ data }) => {
      shopifyContext.setState({ checkoutId: data.checkoutId })
    });
  }, [])

  return (
    <Routes />
  )
}

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider>
      <ShopifyContextProvider>
        <App />
      </ShopifyContextProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
