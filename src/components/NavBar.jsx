// import hikayatImage from '../assets/hikayat-03.png'
// import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   faBars,
//   faToggleOn,
//   faToggleOff,
//   faBookOpen,
//   faList,
//   faTag,
//   faChevronUp,
//   faChevronDown,
//   // faStar,
//   faGear
// } from '@fortawesome/free-solid-svg-icons'
// import Container from 'react-bootstrap/Container'
// import Navbar from 'react-bootstrap/Navbar'
// import { Offcanvas, Stack, ListGroup, Dropdown } from 'react-bootstrap'
// function NavBar() {
//   const [show, setShow] = useState(false)
//   const [theme, setTheme] = useState('light')
//   const handleClose = () => setShow(false)
//   const toggleShow = () => setShow((s) => !s)
//   const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

//   const [showBooksDropdown, setShowBooksDropdown] = useState(false)
//   const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false)

//   const toggleBooksDropdown = () => {
//     setShowBooksDropdown(!showBooksDropdown)
//     setShowCategoriesDropdown(false)
//   }

//   const toggleCategoriesDropdown = () => {
//     setShowCategoriesDropdown(!showCategoriesDropdown)
//     setShowBooksDropdown(false)
//   }

//   return (
//     <>
//       <>
//         <Offcanvas
//           show={show}
//           onHide={handleClose}
//           scroll={true}
//           backdrop={true}
//         >
//           <Offcanvas.Header>
//             <Offcanvas.Title>
//               <img src={hikayatImage} alt='Hikayat Logo' />
//             </Offcanvas.Title>
//           </Offcanvas.Header>
//           <Offcanvas.Body style={{ display: 'flex', flexDirection: 'column' }}>
//             <ListGroup variant='flush'>
//               <ListGroup.Item onClick={toggleBooksDropdown}>
//                 <FontAwesomeIcon icon={faBookOpen} /> {' Books'}
//                 {showBooksDropdown ? (
//                   <FontAwesomeIcon icon={faChevronUp} />
//                 ) : (
//                   <FontAwesomeIcon icon={faChevronDown} />
//                 )}
//                 {showBooksDropdown && (
//                   <div className='dropdown-content'>
//                     {/* Add your dynamic content for Books here */}
//                     <p>Book 1</p>
//                     <p>Book 2</p>
//                     <p>Book 3</p>
//                   </div>
//                 )}
//               </ListGroup.Item>
//               <ListGroup.Item onClick={toggleCategoriesDropdown}>
//                 <FontAwesomeIcon icon={faList} /> {' Categories'}
//                 {showCategoriesDropdown ? (
//                   <FontAwesomeIcon icon={faChevronUp} />
//                 ) : (
//                   <FontAwesomeIcon icon={faChevronDown} />
//                 )}
//                 {showCategoriesDropdown && (
//                   <div className='dropdown-content'>
//                     {/* Add your dynamic content for Categories here */}
//                     <p>Category 1</p>
//                     <p>Category 2</p>
//                     <p>Category 3</p>
//                   </div>
//                 )}
//               </ListGroup.Item>
//               <hr /> {/* Add a horizontal line after the second list item */}
//               <ListGroup.Item>
//                 <FontAwesomeIcon icon={faTag} rotation={90} color='black' />{' '}
//                 {'  keyword'}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <FontAwesomeIcon icon={faTag} rotation={90} color='black' />{' '}
//                 {'  keyword'}
//               </ListGroup.Item>
//               <ListGroup.Item>
//                 <FontAwesomeIcon icon={faTag} rotation={90} color='black' />{' '}
//                 {'  keyword'}
//               </ListGroup.Item>
//               <hr />
//               <ListGroup.Item style={{ marginTop: 'auto' }}>
//                 <FontAwesomeIcon
//                   icon={faGear}
//                   rotation={90}
//                   color='black'
//                   size='1x'
//                 />{' '}
//                 {'  Settings'}
//               </ListGroup.Item>
//             </ListGroup>
//           </Offcanvas.Body>
//         </Offcanvas>
//       </>
//       <Navbar className='mt-2' style={{ border: '1px solid black' }}>
//         <Container
//           fluid
//           className='d-flex justify-content-between align-items-center'
//         >
//           <FontAwesomeIcon
//             onClick={toggleShow}
//             icon={faBars}
//             size='xl'
//             style={{ cursor: 'pointer', marginLeft: '10px' }}
//           />
//           <Navbar.Brand
//             href='#'
//             id='main-title'
//             style={{ fontFamily: 'Nevan', fontSize: '28px', color: '#AF985A' }}
//           >
//             HIKAYAT
//           </Navbar.Brand>
//           <FontAwesomeIcon
//             onClick={toggleTheme}
//             size='2xl'
//             icon={theme === 'light' ? faToggleOn : faToggleOff}
//             style={{ cursor: 'pointer', marginRight: '10px' }}
//           />
//         </Container>
//       </Navbar>
//     </>
//   )
// }

// export default NavBar

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
  faChevronUp,
  faChevronDown,
  faGear
} from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import { Offcanvas, Stack, ListGroup, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavBar() {
  const [show, setShow] = useState(false)
  const [theme, setTheme] = useState('light')
  const handleClose = () => setShow(false)
  const toggleShow = () => setShow((s) => !s)
  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  const [showBooksDropdown, setShowBooksDropdown] = useState(false)
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false)

  const toggleBooksDropdown = () => {
    setShowBooksDropdown(!showBooksDropdown)
    setShowCategoriesDropdown(false)
  }

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown)
    setShowBooksDropdown(false)
  }
  const books = ['Maktub', 'AlChemist', 'Rich Dad Poor Dad']
  const categories = ['Pyar', 'Crime', 'THriller', 'Dead End']
  return (
    <>
      <>
        <Offcanvas
          show={show}
          onHide={handleClose}
          scroll={true}
          backdrop={true}
        >
          <Offcanvas.Header>
            <Offcanvas.Title>
              <img src={hikayatImage} alt='Hikayat Logo' />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ display: 'flex', flexDirection: 'column' }}>
            <ListGroup variant='flush'>
              <ListGroup.Item onClick={toggleBooksDropdown}>
                <FontAwesomeIcon icon={faBookOpen} /> {' Books'}
                {showBooksDropdown ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
                {showBooksDropdown && (
                  <div className='dropdown-content-right'>
                    {books.map((book, index) => (
                      <Link to={`book/${index}`} key={index}>
                        {book}
                      </Link>
                      // <p key={index}>{book}</p>
                    ))}
                  </div>
                )}
              </ListGroup.Item>
              <ListGroup.Item onClick={toggleCategoriesDropdown}>
                <FontAwesomeIcon icon={faList} /> {' Categories'}
                {showCategoriesDropdown ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
                {showCategoriesDropdown && (
                  <div className='dropdown-content-right'>
                    {categories.map((category, index) => (
                      <p key={index}>{category}</p>
                    ))}
                  </div>
                )}
              </ListGroup.Item>
              <hr /> {/* Add a horizontal line after the second list item */}
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTag} rotation={90} color='black' />{' '}
                {'  keyword'}
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTag} rotation={90} color='black' />{' '}
                {'  keyword'}
              </ListGroup.Item>
              <ListGroup.Item>
                <FontAwesomeIcon icon={faTag} rotation={90} color='black' />{' '}
                {'  keyword'}
              </ListGroup.Item>
              <hr />
              <ListGroup.Item style={{ marginTop: 'auto' }}>
                <FontAwesomeIcon
                  icon={faGear}
                  rotation={90}
                  color='black'
                  size='1x'
                />{' '}
                {'  Settings'}
              </ListGroup.Item>
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      </>
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
