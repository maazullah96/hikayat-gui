import React, { useState, useRef } from 'react'
import { Stack, Card, Dropdown, Form } from 'react-bootstrap'
import Footer from './Footer'
import {
  faShareNodes,
  faShare,
  faEllipsis,
  faShuffle,
  faHeart
} from '@fortawesome/free-solid-svg-icons'

import CircularButton from '../CircularButton'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function ContentCard({ data }) {
  const [showExtendedFooter, setShowExtendedFooter] = useState(false)
  const [showMoreContent, setShowMoreContent] = useState(false)
  const [showPopover, setShowPopover] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const target = useRef(null)

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

  const keywords = data['Keywords'].split(',')

  const toggleExtendedFooter = () => {
    setShowExtendedFooter(!showExtendedFooter)
    setShowMoreContent(!showMoreContent)
  }

  return (
    <Card className='m-5  text-center custom-card' style={cardStyle}>
      <Card.Title className='mt-3 '>{data['Title']}</Card.Title>
      <Card.Body>
        <Card.Text
          className='p-3'
          style={{ fontFamily: selectedFont, fontSize: `${fontSize}px` }}
        >
          {data['Body']}
        </Card.Text>
        <div id='Edge' style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Stack
            gap={1}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%'
            }}
          >
            <div className='centered-stack'>
              <CircularButton
                icon={faHeart}
                size={'2x'}
                iconColor={isLiked ? '#FF0000' : '#ffffff'}
                onClick={handleClick}
                color={isLiked ? '#fff' : '#A0AB96'}
              />
            </div>

            <div className='centered-stack'>
              <CircularButton
                icon={faShareNodes}
                size={'2x'}
                color={'#A0AB96'}
              />
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
                            <Dropdown.Toggle
                              variant='primary'
                              id='font-dropdown'
                            >
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
                                onClick={() =>
                                  handleFontChange('Times New Roman')
                                }
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
      </Card.Body>
      <Footer
        showExtendedFooter={showExtendedFooter}
        toggleExtendedFooter={toggleExtendedFooter}
        showMoreContent={showMoreContent}
        data={data}
        keywords={keywords}
      />
    </Card>
  )
}

const cardStyle = {
  backgroundColor: '#e3d8b7',
  borderWidth: '3px'
}

export default ContentCard
