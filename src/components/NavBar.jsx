import hikayatImage from '../assets/hikayat-03.png'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faToggleOn,
  faToggleOff,
  faBookOpen,
  faList,
  faTag,
  faStar
} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { ListGroupItem, ListGroup } from 'react-bootstrap'
import { Stack } from 'react-bootstrap'

function NavBar() {
  const [show, setShow] = useState(false)
  const [theme, setTheme] = useState('light')

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s) => !s)
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
        <Offcanvas.Header>
          <Offcanvas.Title>
            <img src={hikayatImage} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={1}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faBookOpen} /> {' Books'}
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faList} /> {' Categories'}
              </ListGroup.Item>
              <hr /> {/* Add horizontal line after second list item */}
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTag} rotation={90} color='black' />
                {'   ' + 'keyword'}
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTag} rotation={90} color='black' />
                {'   ' + 'keyword'}
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTag} rotation={90} color='black' />
                {'   ' + 'keyword'}
              </ListGroup.Item>
              <hr />
              <ListGroup.Item>
                <FontAwesomeIcon icon={faStar} />
                {' ' + 'Rate the App'}
              </ListGroup.Item>
            </ListGroup>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>

      <Navbar className='mt-2' style={{ border: '1px solid black' }}>
        <Container
          fluid
          className='d-flex justify-content-between align-items-center'
        >
          <FontAwesomeIcon
            onClick={toggleShow}
            icon={faBars}
            size='xl'
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          />
          <Navbar.Brand
            href='#'
            id='main-title'
            style={{ fontFamily: 'Nevan', fontSize: '28px', color: '#AF985A' }}
          >
            HIKAYAT
          </Navbar.Brand>
          <FontAwesomeIcon
            onClick={toggleTheme}
            size='2xl'
            icon={theme === 'light' ? faToggleOn : faToggleOff}
            style={{ cursor: 'pointer', marginRight: '10px' }}
          />
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar
