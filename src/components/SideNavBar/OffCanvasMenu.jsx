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

import DropdownMenu from './DropDownMenu'
import hikayatImage from '../../assets/hikayat-03.png'

function OffCanvasMenu({
  show,
  onHide,
  showBooksDropdown,
  toggleBooksDropdown,
  books,
  showCategoriesDropdown,
  showKeywordsDropdown,
  showCollectionsDropdown,
  toggleCategoriesDropdown,
  toggleKeywordsDropdown,
  toggleCollectionsDropdown,
  categories,
  keywords,
  collections
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
            basePath='books'
          >
            <DropdownMenu items={books} basePath='books' />
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

          <MenuItem
            onClick={toggleCollectionsDropdown}
            icon={faTag}
            text='Collections'
            showDropdown={showCollectionsDropdown}
            toggleDropdown={toggleCollectionsDropdown}
          >
            <DropdownMenu items={collections} basePath='collections' />
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
