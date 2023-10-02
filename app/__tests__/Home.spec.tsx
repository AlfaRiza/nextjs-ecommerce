import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../page'

describe('Home Page', () => {
  render(<Home />)

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('should be can render', () => {
    expect(screen).toBeTruthy()
  })
})
