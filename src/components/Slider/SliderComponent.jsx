import Slider from 'react-slick'
import { useState } from 'react'
// // Import css files

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

import ContentCard from '../Card/ContentCard' // Import your ContentCard component
import Draggable from 'react-draggable'

const SliderComponent = ({ contentData }) => {
  const settings = {
    // dots: true,
    arrows: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <>
      <Slider {...settings}>
        {contentData.map((data, index) => (
          <div key={index}>
            <ContentCard data={data} />
          </div>
        ))}
      </Slider>
    </>
  )
}

export default SliderComponent
