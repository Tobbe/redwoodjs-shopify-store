import StoreLayout from 'src/layouts/StoreLayout'
import ProductCell from 'src/components/ProductCell'

const ProductPage = ({ handle }) => {
  return (
    <StoreLayout>
      <ProductCell handle={handle} />
    </StoreLayout>
  )
}

export default ProductPage
