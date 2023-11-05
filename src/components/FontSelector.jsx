import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useStyleContext } from '../context/StyleContext'
import { Stack } from 'react-bootstrap'

function FontSelector() {
  const { styleState, dispatch } = useStyleContext()
  const [selectedFont, setSelectedFont] = useState(styleState.selectedFont)

  const handleFontChange = (font) => {
    dispatch({ type: 'CHANGE_FONT', payload: font })
    setSelectedFont(font)
  }

  return (
    <Stack id='font-styling' direction='horizontal' gap={3}>
      <div className='p-2'>
        <label>Change Font:</label>
      </div>
      <div className='p-2'>
        <Dropdown>
          <Dropdown.Toggle variant='default' id='dropdownMenu1'>
            {styleState.selectedFont.label}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {/* Font Selection Options */}
            {styleState.fonts.map((option) => (
              <Dropdown.Item
                key={option.id}
                id={option.id}
                onClick={() => handleFontChange(option)}
              >
                {option.label}
              </Dropdown.Item>
            ))}

            {/* Font Size Options */}
            <div className='dropdown-divider'></div>
            <Dropdown.Item header>Font Sizes</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFontSizeChange('small')}>
              Small
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFontSizeChange('medium')}>
              Medium
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFontSizeChange('large')}>
              Large
            </Dropdown.Item>

            {/* Font Color Options */}
            <div className='dropdown-divider'></div>
            <Dropdown.Item header>Font Color</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFontColorChange('red')}>
              Red
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFontColorChange('blue')}>
              Blue
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='p-2'>
        <label id='font-change' style={{ fontFamily: selectedFont.label }}>
          Font Selector
        </label>
      </div>
    </Stack>
  )
}

export default FontSelector
