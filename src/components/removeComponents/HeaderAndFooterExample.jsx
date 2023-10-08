import React, { useState } from 'react'
import {
  faHandshake,
  faChevronDown,
  faChevronUp,
  faBookOpen,
  faList,
  faTag
} from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Stack } from 'react-bootstrap'

function Footer({
  showExtendedFooter,
  toggleExtendedFooter,
  showMoreContent,
  data,
  keywords
}) {
  const keywordsButtons = keywords.map((keyword, index) => (
    <Button key={index} style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}>
      <FontAwesomeIcon icon={faTag} rotation={90} color='white' />{' '}
      {'   ' + keyword}
    </Button>
  ))

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
        {keywordsButtons}
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
    <Card.Footer
      className={`text-muted ${
        showExtendedFooter ? 'expanded-footer' : 'collapsed-footer'
      }`}
      style={footerStyle}
    >
      <Stack gap={1}>{footerContent}</Stack>
    </Card.Footer>
  )
}

function HeaderAndFooterExample() {
  const data = {
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

  const toggleExtendedFooter = () => {
    setShowExtendedFooter(!showExtendedFooter)
    setShowMoreContent(!showMoreContent)
  }

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
        </Card.Text>
      </Card.Body>
      <Footer
        showExtendedFooter={showExtendedFooter}
        toggleExtendedFooter={toggleExtendedFooter}
        showMoreContent={showMoreContent}
        data={data}
        keywords={keywords}
      />
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

const iconStyle = {
  color: 'white'
}

export default HeaderAndFooterExample
