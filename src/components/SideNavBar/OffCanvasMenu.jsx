import MenuItem from './MenuItem'
import { Offcanvas, ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faList,
  faGear,
  faTag
} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import hikayatImage from '../../assets/hikayat-03.png'

function DropdownMenu({ items, basePath }) {
  return (
    <div className='dropdown-content-right'>
      {items.map((item, index) => (
        <Link
          to={`${basePath}/${index}`}
          key={index}
          className='dropdown-item pb-2'
        >
          {item}
        </Link>
      ))}
      <Link to={`${basePath}`} key={-1} className='dropdown-item pb-2'>
        {`More ${basePath.charAt(0).toUpperCase() + basePath.slice(1)}...`}
      </Link>
    </div>
  )
}

function OffCanvasMenu({
  show,
  onHide,
  showBooksDropdown,
  toggleBooksDropdown,
  books,
  showCategoriesDropdown,
  showKeywordsDropdown,
  toggleCategoriesDropdown,
  toggleKeywordsDropdown,
  categories,
  keywords
}) {
  return (
    <Offcanvas
      show={show}
      onHide={onHide}
      scroll={true}
      backdrop={true}
      className='offcanvas-custom'
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <img src={hikayatImage} alt='Hikayat Logo' />
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='offcanvas-body-scrollable'>
        <ListGroup>
          <MenuItem
            onClick={toggleBooksDropdown}
            icon={faBookOpen}
            text='Books'
            showDropdown={showBooksDropdown}
            toggleDropdown={toggleBooksDropdown}
          >
            <DropdownMenu items={books} basePath='book' />
          </MenuItem>

          <MenuItem
            onClick={toggleCategoriesDropdown}
            icon={faList}
            text='Categories'
            showDropdown={showCategoriesDropdown}
            toggleDropdown={toggleCategoriesDropdown}
          >
            <DropdownMenu items={categories} basePath='category' />
          </MenuItem>

          <hr />

          <MenuItem
            onClick={toggleKeywordsDropdown}
            icon={faTag}
            text='Keywords'
            showDropdown={showKeywordsDropdown}
            toggleDropdown={toggleKeywordsDropdown}
          >
            <DropdownMenu items={keywords} basePath='keywords' />
          </MenuItem>

          <hr />
          <ListGroup.Item className='mt-auto'>
            <Link to={`settings`} className='dropdown-item pb-2'>
              <FontAwesomeIcon
                icon={faGear}
                rotation={90}
                color='black'
                size='lg'
              />{' '}
              <span className='icon-text'>Settings</span>
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default OffCanvasMenu
