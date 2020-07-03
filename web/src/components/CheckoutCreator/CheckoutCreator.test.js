import { render } from '@redwoodjs/testing'

import CheckoutCreator from './CheckoutCreator'

describe('CheckoutCreator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckoutCreator />)
    }).not.toThrow()
  })
})
