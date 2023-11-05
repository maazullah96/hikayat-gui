import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

import SliderComponent from './Slider/SliderComponent'
import Options from './Options'

import { Button, Modal, Stack } from 'react-bootstrap'
import { FaCog } from 'react-icons/fa' // Import the Font Awesome cog icon
import { useDataContext } from '../context/DataContext'
import FontSelector from './FontSelector'
import FontSizeSelector from './FontSizeSelector'

const Home = () => {
  const { data } = useDataContext()
  const { stories } = data
  const [showSettingsModal, setShowSettingsModal] = useState(false)

  // Settings Modal
  const SettingsModal = (
    <Modal show={showSettingsModal} onHide={() => setShowSettingsModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Stack gap={3}>
          <div className='p-2'>
            <FontSelector />
            <FontSizeSelector />
          </div>
        </Stack>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => setShowSettingsModal(false)}>
          Close
        </Button>
        {/* Add save or apply settings button if needed */}
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <NavBar />
      <Outlet />
      {SettingsModal}
      <SliderComponent stories={stories} />
      <Button
        variant='light'
        className='settings-button'
        style={{ position: 'fixed', top: '90%', right: '10px' }}
        onClick={() => setShowSettingsModal(true)}
      >
        <FaCog />
      </Button>
    </>
  )
}

export default Home
