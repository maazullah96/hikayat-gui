import { Stack, OverlayTrigger, Popover, Dropdown, Form } from 'react-bootstrap'

import CircularButton from './CircularButton'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  faShareNodes,
  faEllipsis,
  faShuffle,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

const Options = () => {
  const target = useRef(null)

  const [showPopover, setShowPopover] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const [selectedFont, setSelectedFont] = useState('Arial')
  const handleClickPop = () => {
    setShowPopover(!showPopover)
  }

  const handleFontChange = (font) => {
    setSelectedFont(font)
  }

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  const [fontSize, setFontSize] = useState(16)

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value)
  }

  return (
    <div
      id='Edge'
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#e6d8b7'
      }}
    >
      <Stack
        gap={3}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          padding: '10px'
        }}
      >
        <div className='centered-stack'>
          <FontAwesomeIcon
            ref={target}
            color={isLiked ? '#FF0000' : '#ffffff'}
            icon={faHeart}
            size='2x'
            // onClick={handleClickPop}
            onClick={handleClick}
          />
        </div>

        <div className='centered-stack'>
          <CircularButton icon={faShareNodes} size={'2x'} color={'#A0AB96'} />
        </div>
        <div className='centered-stack'>
          <OverlayTrigger
            trigger='click'
            placement='left'
            target={target.current}
            overlay={
              <Popover id='popover-positioned-left'>
                <Popover.Header as='h3'>Popover left</Popover.Header>
                <Popover.Body>
                  <Stack>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle variant='primary' id='font-dropdown'>
                          Select Font
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item
                            active={selectedFont === 'Arial'}
                            onClick={() => handleFontChange('Arial')}
                          >
                            Arial
                          </Dropdown.Item>
                          <Dropdown.Item
                            active={selectedFont === 'Verdana'}
                            onClick={() => handleFontChange('Verdana')}
                          >
                            Verdana
                          </Dropdown.Item>
                          <Dropdown.Item
                            active={selectedFont === 'Times New Roman'}
                            onClick={() => handleFontChange('Times New Roman')}
                          >
                            Times New Roman
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>

                    <div>
                      <Form.Range
                        value={fontSize}
                        min={12}
                        max={36}
                        step={2}
                        onChange={handleFontSizeChange}
                      />
                    </div>
                  </Stack>
                </Popover.Body>
              </Popover>
            }
            show={showPopover}
            onClick={handleClickPop}
          >
            <FontAwesomeIcon
              ref={target}
              color={'#ffffff'}
              icon={faEllipsis}
              size='2x'
              onClick={handleClickPop}
            />
          </OverlayTrigger>
        </div>
        <div className='centered-stack'>
          <CircularButton icon={faShuffle} size={'3x'} color={'#5D5D5D'} />
        </div>
      </Stack>
    </div>
  )
}
export default Options
