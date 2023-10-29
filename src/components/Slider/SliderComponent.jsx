// import Slider from 'react-slick'
// import { useState } from 'react'
// // // Import css files
// import ContentCard from '../Card/ContentCard' // Import your ContentCard component

// const SliderComponent = ({ contentData }) => {
//   const settings = {
//     // dots: true,
//     arrows: true,
//     // infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   }

//   return (
//     <>
//       <Slider {...settings}>
//         {contentData.map((data, index) => (
//           <div key={index}>{/* <ContentCard data={data} /> */}</div>
//         ))}
//       </Slider>
//     </>
//   )
// }

// export default SliderComponent

import Slider from 'react-slick'
import { useState } from 'react'
import ContentCard from '../Card/ContentCard'

const SliderComponent = ({ stories }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true
  }

  return (
    <div className='slider-container'>
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div key={index}>
            <ContentCard data={story} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default SliderComponent
