import { render } from '@redwoodjs/testing'

import AddToCartButton from './AddToCartButton'

describe('AddToCartButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AddToCartButton />)
    }).not.toThrow()
  })
})
