import NavBar from './components/NavBar'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SliderComponent from './components/Slider/SliderComponent'

function App() {
  const contentData = [
    {
      Title: 'Title 1',

      Body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam magni eaque maiores modi et, tempora veritatis explicabo perferendis laborum odit vel sequi non excepturi rem? Veritatis, est suscipit mollitia animi assumenda eligendi ab accusamus corrupti eveniet fugit a ut facere modi illo quisquam perferendis unde quis amet at natus. Inventore voluptatem tenetur delectus quisquam dolorum deserunt fugit harum, facilis sint doloribus ut id enim omnis eum esse sequi iure facere officia eligendi expedita et qui cumque temporibus minus! Accusantium consequuntur fuga possimus atque obcaecati debitis quidem natus soluta non repellat nihil excepturi laborum quia, veniam odio recusandae eaque maiores? Fugit deleniti aut veritatis ipsam, sit aliquam voluptas? Inventore nesciunt hic doloribus ab in, aliquam quo? Facilis recusandae porro officiis fugit dolores alias vel laudantium velit, nulla optio beatae tempora provident molestias quaerat, perferendis qui, odit molestiae magni delectus quasi. Quas vel ducimus quo ipsa animi? Dicta fugit ipsam quasi est, rem dolorum accusamus. Provident eum repellendus consequatur, delectus error quis sunt aperiam hic sequi tenetur blanditiis quasi similique nesciunt expedita voluptatem dicta. Assumenda doloremque officia doloribus, ex quisquam cupiditate possimus earum quis accusamus, at voluptatibus, et similique velit facilis iure dolores maxime. Ratione numquam vero animi ut? Nesciunt labore dolorum vel accusamus optio rem quam nam blanditiis totam mollitia. Aut, repellendus voluptatibus obcaecati distinctio doloremque quod est fugit quisquam magnam unde voluptatem rem reiciendis! Minima iusto cum assumenda quidem, perferendis molestias architecto saepe sequi expedita blanditiis pariatur ad illo repudiandae alias laboriosam laudantium, maiores dolorem, temporibus itaque consequatur! Exercitationem asperiores consequatur rerum est voluptatem natus dicta, vitae culpa illum, vero nam repellendus fuga facere suscipit! Doloremque magni aperiam saepe dolor quisquam vitae facilis harum quis recusandae. Perferendis itaque libero neque et totam consequuntur consequatur iste dignissimos molestiae quod. Nostrum distinctio inventore ratione esse exercitationem vitae dolores omnis earum eaque?',
      Keywords: 'keyword1, keyword2, keyword3'
    },
    {
      Title: 'Title 2',
      Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Keywords: 'keyword4, keyword5, keyword6'
    },
    {
      Title: 'Title 2',
      Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Keywords: 'keyword4, keyword5, keyword6'
    },
    {
      Title: 'Title 2',
      Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      Keywords: 'keyword4, keyword5, keyword6'
    }
    // Add more content objects as needed
  ]
  return (
    <>
      <NavBar />
      {/* <HeaderAndFooterExample /> */}
      <SliderComponent contentData={contentData} />
    </>
  )
}

export default App
