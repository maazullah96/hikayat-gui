import { ListGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

function MenuItem({
  onClick,
  icon,
  text,
  showDropdown,
  toggleDropdown,
  children
}) {
  return (
    <ListGroup.Item onClick={onClick}>
      <div className='icon-text-container'>
        <FontAwesomeIcon icon={icon} />

        <span className='icon-text'>{text}</span>

        {showDropdown ? (
          <span className='icon-chevron'>
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        ) : (
          <span className='icon-chevron'>
            <FontAwesomeIcon icon={faChevronDown} />
          </span>
        )}
      </div>
      {showDropdown && children}
    </ListGroup.Item>
  )
}

export default MenuItem
