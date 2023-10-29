import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faToggleOn,
  faToggleOff
} from '@fortawesome/free-solid-svg-icons'
import { Container, Navbar } from 'react-bootstrap'
import OffCanvasMenu from './SideNavBar/OffCanvasMenu' // Import the OffCanvasMenu component

function NavBar() {
  const [show, setShow] = useState(false)
  const [theme, setTheme] = useState('light')
  const [showBooksDropdown, setShowBooksDropdown] = useState(false)
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false)
  const [showKeywordsDropdown, setShowKeywordsDropdown] = useState(false)
  const [showCollectionsDropdown, setShowCollectionsDropdown] = useState(false)

  const toggleShow = () => setShow((s) => !s)
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  const toggleBooksDropdown = () => {
    setShowBooksDropdown(!showBooksDropdown)
    setShowCategoriesDropdown(false)
    // setShowCollectionsDropdown(false)
    // setShowKeywordsDropdown(false)
  }

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown)
    setShowBooksDropdown(false)
    // setShowCollectionsDropdown(false)
    // setShowKeywordsDropdown(false)
  }

  const toggleKeywordsDropdown = () => {
    setShowKeywordsDropdown(!showKeywordsDropdown)
    // setShowCategoriesDropdown(false)
    // setShowBooksDropdown(false)
    setShowCollectionsDropdown(false)
  }
  const toggleCollectionsDropdown = () => {
    setShowCollectionsDropdown(!showCollectionsDropdown)
    // setShowCategoriesDropdown(false)
    // setShowBooksDropdown(false)
    setShowKeywordsDropdown(false)
  }

  const books = ['Maktub', 'AlChemist', 'Rich Dad Poor Dad']
  const categories = ['Pyar', 'Crime', 'THriller', 'Dead End']
  const keywords = ['Chemist', 'Pot', 'Pharmist', 'Danger']
  const collections = ['Liked', 'Deads']
  return (
    <>
      {/* Use the OffCanvasMenu component here */}
      <OffCanvasMenu
        show={show}
        onHide={() => setShow(false)}
        showBooksDropdown={showBooksDropdown}
        toggleBooksDropdown={toggleBooksDropdown}
        books={books}
        showCategoriesDropdown={showCategoriesDropdown}
        showKeywordsDropdown={showKeywordsDropdown}
        showCollectionsDropdown={showCollectionsDropdown}
        toggleCategoriesDropdown={toggleCategoriesDropdown}
        toggleKeywordsDropdown={toggleKeywordsDropdown}
        toggleCollectionsDropdown={toggleCollectionsDropdown}
        categories={categories}
        keywords={keywords}
        collections={collections}
      />

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
            style={{
              fontFamily: 'Nevan',
              fontSize: '28px',
              color: '#AF985A'
            }}
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
