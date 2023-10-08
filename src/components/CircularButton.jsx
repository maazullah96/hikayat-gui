import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

const CircularButton = ({ icon, size, color, onClick, iconColor }) => {
  return (
    <Button
      variant='secondary'
      className='circular-button'
      style={{ backgroundColor: color, outline: 'none' }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} size={size} color={iconColor} />
    </Button>
  )
}

CircularButton.defaultProps = {
  iconColor: '#ffffff' // Set the default iconColor to black (#000000)
}

export default CircularButton
