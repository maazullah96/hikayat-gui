import { useState } from 'react'
// import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function OffCanvasExample() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s) => !s)

  return (
    <>
      <FontAwesomeIcon onClick={toggleShow} icon={faBars} />
      <Offcanvas show={show} onHide={handleClose} scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <img src='../assets/hikayat-03.png' />
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffCanvasExample
