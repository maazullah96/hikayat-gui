import {
  faHandshake,
  faChevronDown,
  faChevronUp,
  faBookOpen,
  faList,
  faTag
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack } from 'react-bootstrap'

function HeaderAndFooterExample() {
  const data = {
    // '\ufeffTimestamp': '1/13/2020 19:02:15',
    Title: 'Think of the lizard.',
    Author: 'Paulo Coelho',
    Book: 'Maktub',
    Category: 'Spirtual',
    Keywords: 'Picture',
    Body: "Think of the lizard. It spends most of its life on the ground, envying the birds and indignant at its fate and\nits shape. \u201cI am the most disliked of all the creatures,\u201d it thinks. \u201cUgly, repulsive, and condemned to\ncrawl along the ground.\u201d One day, though, Mother Nature asks the lizard to make a cocoon. The lizard\nis startled -it has never made a cocoon before. He thinks that he is building his tomb, and prepares to die.\nAlthough unhappy with the life he has led up until then, he complains to God: \u201cJust when I finally became\naccustomed to things, Lord, you take away what little I have.\u201d In desperation, he locks himself into the\ncocoon and awaits the end. Some days later, he finds that he has been transformed into a beautiful\nbutterfly. He is able to fly to the sky, and he is greatly admired. He is surprised at the meaning of life and\nat God's designs.",
    'Short Description': 'I am the most disliked of all the creatures'
  }
  const [showExtendedFooter, setShowExtendedFooter] = useState(true)
  const [showMoreContent, setShowMoreContent] = useState(false)

  const keywords = data['Keywords'].split(',')
  console.log(keywords)
  const toggleExtendedFooter = () => {
    setShowExtendedFooter(!showExtendedFooter)
    setShowMoreContent(!showMoreContent)
  }

  const footerContent = showExtendedFooter ? (
    <>
      <div className='d-flex justify-content-between align-items-center'>
        <Stack direction='horizontal' gap={2}>
          <FontAwesomeIcon icon={faHandshake} size='lg' style={iconStyle} />
          <div className='p-2' id='contributerName'>
            Contributer Name
          </div>
        </Stack>
        <Button variant='link' onClick={toggleExtendedFooter}>
          {showMoreContent ? (
            <FontAwesomeIcon icon={faChevronDown} color='black' size='lg' />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} color='black' size='lg' />
          )}
        </Button>
      </div>
      <Stack direction='horizontal' gap={2}>
        <>
          <Button style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <FontAwesomeIcon icon={faBookOpen} color='white' /> {data['Book']}
          </Button>
        </>

        <>
          <Button style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
            <FontAwesomeIcon icon={faList} color='white' />
            {'  ' + data['Category']}
          </Button>
        </>
        <>
          {keywords.map((keyword) => {
            return (
              <>
                <Button style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
                  <FontAwesomeIcon icon={faTag} rotation={90} color='white' />
                  {'   ' + keyword}
                </Button>
              </>
            )
          })}
        </>
      </Stack>
    </>
  ) : (
    <div className='d-flex justify-content-between align-items-center'>
      <Stack direction='horizontal' gap={2}>
        <FontAwesomeIcon icon={faHandshake} size='lg' style={iconStyle} />
        <div className='p-2' id='contributerName'>
          Contributer Name
        </div>
      </Stack>
      <Button variant='link' onClick={toggleExtendedFooter}>
        {showMoreContent ? (
          <FontAwesomeIcon icon={faChevronDown} color='black' size='lg' />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} color='black' size='lg' />
        )}
      </Button>
    </div>
  )

  return (
    <Card className='m-5 text-center' border='primary' style={cardStyle}>
      <Card.Title className='mt-3'>Lorem Ipsum</Card.Title>
      <Card.Body>
        <Card.Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis sint
          harum ea cumque libero, explicabo non natus totam ipsa in velit culpa
          cum id exercitationem praesentium, molestias obcaecati. Pariatur id
          sint nihil vitae autem similique. Voluptatum possimus corrupti
          reprehenderit quaerat doloribus iusto accusamus ipsam. Ut expedita
          totam maiores facere provident delectus temporibus neque, sapiente,
          quidem officiis atque? Autem itaque, necessitatibus laudantium
          doloremque veniam velit voluptates at nemo magni nam odio aperiam
          error. Labore error laudantium accusantium impedit culpa nemo quis
          quam? Quo deleniti eaque cupiditate illum, eos sunt ad omnis rem sint
          velit, soluta quisquam repellendus cum facilis commodi magni fuga.
          Dolor dolore quia perferendis, aspernatur adipisci dolorum enim rem
          omnis amet quidem laudantium ipsam harum. Temporibus amet tempora
          quaerat quam molestiae non perferendis iure sint error labore!
          Accusantium eos dolor culpa ex praesentium itaque exercitationem nemo,
          eligendi voluptate necessitatibus eius aperiam vel fugiat sunt nihil
          doloribus vero enim nesciunt distinctio quo a est quia minima quidem.
          Deserunt exercitationem, quas unde dolorum modi quibusdam consectetur
          error impedit. Obcaecati doloribus vel labore totam quia quam
          voluptatem maiores tenetur facilis culpa! Fuga provident vero, eos
          repudiandae facilis ipsam veritatis quasi incidunt qui! Architecto
          eveniet eligendi veniam perferendis dolorum provident, quas dolore
          incidunt, fugiat repellendus consequatur cum explicabo in vel velit
          quia adipisci, libero asperiores modi ut atque nesciunt dolores.
          Numquam itaque praesentium, pariatur fuga dolorem molestias rem sint
          maiores totam cumque natus magnam nam iusto nihil, repellendus ipsa
          eos. Repellendus necessitatibus inventore, voluptatem sit non
          molestias nisi ipsum illum repellat eveniet reprehenderit quia cumque
          consectetur molestiae ad tempore pariatur laboriosam amet praesentium
          delectus facilis, aliquam eaque voluptates consequuntur. Architecto
          aliquam ipsam, quibusdam suscipit facere sapiente, libero doloremque
          ad deserunt nisi animi necessitatibus voluptas tempore? Quam quas
          minima veniam eum. Quis repellat, quidem earum tempora minus quod,
          esse exercitationem nemo, recusandae velit nihil?
        </Card.Text>
      </Card.Body>
      <Card.Footer
        className={`text-muted ${
          showExtendedFooter ? 'expanded-footer' : 'collapsed-footer'
        }`}
        style={footerStyle}
      >
        <Stack gap={1}>{footerContent}</Stack>
      </Card.Footer>
    </Card>
  )
}

const cardStyle = {
  backgroundColor: '#e3d8b7',
  borderWidth: '3px'
}

const footerStyle = {
  backgroundColor: '#629C8A'
}

// const footerItemStyle = {
//   border: '1px solid black'
// }

const iconStyle = {
  color: 'white'
}

export default HeaderAndFooterExample
