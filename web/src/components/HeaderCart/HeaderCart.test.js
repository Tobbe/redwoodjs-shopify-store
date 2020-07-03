import { render } from '@redwoodjs/testing'

import HeaderCart from './HeaderCart'

describe('HeaderCart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderCart />)
    }).not.toThrow()
  })
})
