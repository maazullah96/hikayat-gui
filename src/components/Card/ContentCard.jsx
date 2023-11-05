import { Card, Button } from 'react-bootstrap'
import Footer from './Footer'
import { useState } from 'react'
import { useStyleContext, StyleContext } from '../../context/StyleContext'

function ContentCard({ data }) {
  const [showExtendedFooter, setShowExtendedFooter] = useState(false)
  const [showMoreContent, setShowMoreContent] = useState(false)
  const maxTextLength = 400 // Set your desired maximum length
  const { name, body } = data

  const toggleExtendedFooter = () => {
    setShowExtendedFooter(!showExtendedFooter)
  }

  const { styleState, dispatch } = useStyleContext()

  // Retrieve the selectedFont from styleState
  const { selectedFont, selectedFontSize } = styleState

  const toggleCardText = () => {
    setShowMoreContent(!showMoreContent)
  }

  function upperCaseFirst(str) {
    return str.charAt(0).toUpperCase() + str.substring(1)
  }

  return (
    <div
      className='d-flex justify-content-center align-items-center'
      style={containerStyle}
    >
      <Card className='text-center custom-card' style={cardStyle}>
        <Card.Title className='mt-3'>{upperCaseFirst(name.trim())}</Card.Title>
        <Card.Body>
          <Card.Text
            className='p-3'
            style={{
              fontSize: `${selectedFontSize}px`,
              fontFamily: selectedFont.label
            }}
          >
            <div>
              {showMoreContent ? body : body.substring(0, maxTextLength)}
            </div>
            {body.length > maxTextLength && (
              <Button variant='link' onClick={toggleCardText}>
                {showMoreContent ? 'Show Less' : 'Read More'}
              </Button>
            )}
          </Card.Text>
        </Card.Body>
        <Footer
          showExtendedFooter={showExtendedFooter}
          toggleExtendedFooter={toggleExtendedFooter}
          showMoreContent={showMoreContent}
          data={data}
        />
      </Card>
    </div>
  )
}

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '70vh',
  minHeight: '50vh', // Use minHeight to ensure a minimum height for the container
  maxHeight: '80vh'
}

const cardStyle = {
  backgroundColor: '#e3d8b7',
  borderWidth: '3px',
  width: '800px' // Set a constant width for the card
}

export default ContentCard
