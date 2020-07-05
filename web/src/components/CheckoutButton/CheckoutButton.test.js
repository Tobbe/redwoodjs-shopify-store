import { render } from '@redwoodjs/testing'

import CheckoutButton from './CheckoutButton'

describe('CheckoutButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CheckoutButton />)
    }).not.toThrow()
  })
})
