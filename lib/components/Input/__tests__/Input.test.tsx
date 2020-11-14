import React from 'react'
import {render, fireEvent} from '@testing-library/react'

import {Input} from '../Input'

describe("<Input />", () => {
  test('It should add a name', () => {
    const {getByTestId} = render(<Input label="Name" />)
    const input = getByTestId('input-testid') as HTMLInputElement
    
    fireEvent.change(input, {target: {
      value: "Filipe"
    }})
  
    expect(input.value).toBe('Filipe')
  })
})
