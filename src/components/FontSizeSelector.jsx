import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useStyleContext } from '../context/StyleContext'
import { Stack } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

function FontSizeSelector() {
  const { styleState, dispatch } = useStyleContext()
  const [fontSize, setFontSize] = useState(styleState.selectedFontSize) // Initial font size

  const handleFontSizeChange = (value) => {
    setFontSize(value)
    dispatch({ type: 'CHANGE_FONT_SIZE', payload: value })
  }

  return (
    <Stack id='font-styling' direction='horizontal' gap={3}>
      <div className='p-2'>
        <Form.Label>Font Size </Form.Label>
      </div>
      <div className='p-4'>
        <Form.Range
          value={fontSize}
          onChange={(e) => handleFontSizeChange(e.target.value)}
          min={12}
          max={36}
        />
      </div>
      <div className='p-2'>
        <label id='font-change' style={{ fontSize: `${fontSize}px` }}>
          Font Selector
        </label>
      </div>
    </Stack>
  )
}

export default FontSizeSelector
