import { Button, Stack, Card } from 'react-bootstrap'

import {
  faHandshake,
  faChevronDown,
  faChevronUp,
  faBookOpen,
  faList,
  faTag,
  faPen
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconStyle = {
  color: 'white'
}

const footerStyle = {
  backgroundColor: '#629C8A'
}

import FooterButton from './FooterButton'
function Footer({
  showExtendedFooter,
  toggleExtendedFooter,
  showMoreContent,
  data
}) {
  const { category, book, author, keywords } = data

  const keywordsButtons = keywords.map((keyword, index) => (
    <FooterButton
      key={index}
      icon={faTag}
      rotation={90}
      color='white'
      data={keyword}
      type='keyword'
    ></FooterButton>
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
          <FooterButton
            icon={faBookOpen}
            data={book}
            type='book'
          ></FooterButton>
        </>
        <>
          <FooterButton icon={faPen} data={author} type='author'></FooterButton>
        </>
        <>
          <FooterButton
            icon={faList}
            rotation={90}
            color='white'
            data={category}
            type='category'
          ></FooterButton>
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
