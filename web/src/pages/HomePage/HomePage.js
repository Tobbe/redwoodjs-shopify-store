import StoreLayout from 'src/layouts/StoreLayout'
import ProductsCell from 'src/components/ProductsCell'

const HomePage = () => {
  return (
    <StoreLayout>
      <p>RedwoodJS as an e-commerce storefront</p>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <ProductsCell />
      </div>
    </StoreLayout>
  )
}

export default HomePage
