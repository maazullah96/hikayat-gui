import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'react-bootstrap'

const FooterButton = ({ icon, rotation, data }) => {
  const { name, id } = data
  return (
    <Button
      variant='secondary'
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
    >
      <FontAwesomeIcon icon={icon} rotation={rotation} color='white' />{' '}
      {'   ' + name}
    </Button>
  )
}

FooterButton.defaultProps = {
  rotation: 0,
  data: {
    name: '',
    id: ''
  }
}

export default FooterButton
