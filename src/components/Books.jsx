import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { useDataContext } from '../context/DataContext'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const Books = () => {
  const [showModal, setShowModal] = useState(true)
  const { data } = useDataContext()
  const { books } = data

  const handleModalClose = () => {
    setShowModal(false)
  }
  return (
    <div>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {books.map((book, index) => {
              const { author, book_id, name } = book
              return (
                <Link to={`${book_id}`} key={book_id}>
                  <ListGroup.Item>{name}</ListGroup.Item>
                </Link>
              )
            })}
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Books
