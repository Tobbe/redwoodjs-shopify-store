import { useMutation } from '@redwoodjs/web'
import { ShopifyContext } from 'src/context/ShopifyContext'

const CREATE_CHECKOUT = gql`
  mutation {
    checkoutId: createCheckout
  }
`

const CheckoutCreator = () => {
  const shopifyContext = React.useContext(ShopifyContext)
  const [createCheckout] = useMutation(CREATE_CHECKOUT);

  React.useEffect(() => {
    createCheckout().then(({ data }) => {
      shopifyContext.setState({ checkoutId: data.checkoutId })
    });
  }, [])

  return null;
}

export default CheckoutCreator
