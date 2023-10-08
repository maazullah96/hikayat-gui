import { Button, Stack, Card } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHandshake,
  faChevronDown,
  faChevronUp,
  faBookOpen,
  faList,
  faTag
} from '@fortawesome/free-solid-svg-icons'

const iconStyle = {
  color: 'white'
}

const footerStyle = {
  backgroundColor: '#629C8A'
}

function Footer({
  showExtendedFooter,
  toggleExtendedFooter,
  showMoreContent,
  data,
  keywords
}) {
  const keywordsButtons = keywords.map((keyword, index) => (
    <Button
      key={index}
      variant='secondary'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
    >
      <FontAwesomeIcon icon={faTag} rotation={90} color='white' />{' '}
      {'   ' + keyword}
    </Button>
  ))

  const footerContent = showExtendedFooter ? (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <Stack direction='horizontal' gap={2}>
          <FontAwesomeIcon icon={faHandshake} size='lg' style={iconStyle} />
          <div className='p-2' id='contributerName'>
            Contributer Name
          </div>
        </Stack>
        <Button variant='link' onClick={toggleExtendedFooter}>
          {showMoreContent ? (
            <FontAwesomeIcon icon={faChevronDown} color='black' size='lg' />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} color='black' size='lg' />
          )}
        </Button>
      </div>
      <Stack direction='horizontal' gap={2}>
        <>
          <Button
            variant='secondary'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
          >
            <FontAwesomeIcon icon={faBookOpen} color='white' /> {data['Book']}
          </Button>
        </>

        <>
          <Button
            variant='secondary'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
          >
            <FontAwesomeIcon icon={faList} color='white' />
            {'  ' + data['Category']}
          </Button>
        </>
        {keywordsButtons}
      </Stack>
    </>
  ) : (
    <div className='d-flex justify-content-between align-items-center'>
      <Stack direction='horizontal' gap={2}>
        <FontAwesomeIcon icon={faHandshake} size='lg' style={iconStyle} />
        <div className='p-2' id='contributerName'>
          Contributer Name
        </div>
      </Stack>
      <Button variant='link' onClick={toggleExtendedFooter}>
        {showMoreContent ? (
          <FontAwesomeIcon icon={faChevronDown} color='black' size='lg' />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} color='black' size='lg' />
        )}
      </Button>
    </div>
  )

  return (
    <Card.Footer
      className={`text-muted ${
        showExtendedFooter ? 'expanded-footer' : 'collapsed-footer'
      }`}
      style={footerStyle}
    >
      <Stack gap={1}>{footerContent}</Stack>
    </Card.Footer>
  )
}

export default Footer
