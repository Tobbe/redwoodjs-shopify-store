import StoreLayout from 'src/layouts/StoreLayout'
import ProductsCell from 'src/components/ProductsCell'

const HomePage = () => {
  return (
    <StoreLayout>
      <p>Get some swag!</p>
      <div style={{ display: 'flex' }}>
        <ProductsCell />
      </div>
    </StoreLayout>
  )
}

export default HomePage
