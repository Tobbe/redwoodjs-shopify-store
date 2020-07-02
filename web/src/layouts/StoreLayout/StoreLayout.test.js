import { render } from '@redwoodjs/testing'

import StoreLayout from './StoreLayout'

describe('StoreLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<StoreLayout />)
    }).not.toThrow()
  })
})
