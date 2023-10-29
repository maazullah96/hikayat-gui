import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'
import { useDataContext } from '../context/DataContext'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'

import SliderComponent from './Slider/SliderComponent'
import Options from './Options'

const Home = () => {
  // const contentData = [
  //   {
  //     Title: 'Title 1',

  //     Body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam magni eaque maiores modi et, tempora veritatis explicabo perferendis laborum odit vel sequi non excepturi rem? Veritatis, est suscipit mollitia animi assumenda eligendi ab accusamus corrupti eveniet fugit a ut facere modi illo quisquam perferendis unde quis amet at natus. Inventore voluptatem tenetur delectus quisquam dolorum deserunt fugit harum, facilis sint doloribus ut id enim omnis eum esse sequi iure facere officia eligendi expedita et qui cumque temporibus minus! Accusantium consequuntur fuga possimus atque obcaecati debitis quidem natus soluta non repellat nihil excepturi laborum quia, veniam odio recusandae eaque maiores? Fugit deleniti aut veritatis ipsam, sit aliquam voluptas? Inventore nesciunt hic doloribus ab in, aliquam quo? Facilis recusandae porro officiis fugit dolores alias vel laudantium velit, nulla optio beatae tempora provident molestias quaerat, perferendis qui, odit molestiae magni delectus quasi. Quas vel ducimus quo ipsa animi? Dicta fugit ipsam quasi est, rem dolorum accusamus. Provident eum repellendus consequatur, delectus error quis sunt aperiam hic sequi tenetur blanditiis quasi similique nesciunt expedita voluptatem dicta. Assumenda doloremque officia doloribus, ex quisquam cupiditate possimus earum quis accusamus, at voluptatibus, et similique velit facilis iure dolores maxime. Ratione numquam vero animi ut? Nesciunt labore dolorum vel accusamus optio rem quam nam blanditiis totam mollitia. Aut, repellendus voluptatibus obcaecati distinctio doloremque quod est fugit quisquam magnam unde voluptatem rem reiciendis! Minima iusto cum assumenda quidem, perferendis molestias architecto saepe sequi expedita blanditiis pariatur ad illo repudiandae alias laboriosam laudantium, maiores dolorem, temporibus itaque consequatur! Exercitationem asperiores consequatur rerum est voluptatem natus dicta, vitae culpa illum, vero nam repellendus fuga facere suscipit! Doloremque magni aperiam saepe dolor quisquam vitae facilis harum quis recusandae. Perferendis itaque libero neque et totam consequuntur consequatur iste dignissimos molestiae quod. Nostrum distinctio inventore ratione esse exercitationem vitae dolores omnis earum eaque?',
  //     Keywords: 'keyword1, keyword2, keyword3'
  //   },
  //   {
  //     Title: 'Title 2',
  //     Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     Keywords: 'keyword4, keyword5, keyword6'
  //   },
  //   {
  //     Title: 'Title 2',
  //     Body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  //     Keywords: 'keyword4, keyword5, keyword6'
  //   },
  //   {
  //     Title: 'Title 2',
  //     Body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quas esse? Laboriosam quisquam veniam fugit, fugiat, ipsa laborum eius deleniti ut eos corrupti expedita. Est vero quae voluptates quo beatae dolorem in, quasi perferendis molestiae autem facere voluptate ab minima ipsa minus quisquam modi facilis cumque quos repudiandae consectetur atque nemo. Sunt, unde. Facere id provident distinctio quod adipisci nulla ullam quisquam, unde ab quo minus molestias dolorem, nesciunt accusamus assumenda. Accusamus molestiae aliquid iusto quo! Reprehenderit at incidunt, ratione rem corporis assumenda eos aperiam sed suscipit perferendis nemo facere accusamus mollitia deserunt blanditiis repellendus! Accusantium excepturi a placeat laboriosam inventore quis est sunt, delectus aliquid obcaecati animi velit. Consectetur dolore laudantium iste rem minima tempore, accusantium, officiis ab blanditiis natus sequi id obcaecati nulla ad est facere nemo expedita? Facilis dicta laborum eum praesentium facere debitis odio illum autem aliquam in, est aspernatur nulla excepturi dolores possimus voluptas optio repudiandae eius fugit illo repellat. Unde et dolorem sed? Excepturi, placeat ratione. Praesentium, velit. Eaque dolore quasi quos rerum iusto odio cumque, vel, necessitatibus dolores sit aperiam doloribus quisquam tempora nam quibusdam! Corporis, eius. Incidunt dicta id asperiores facere, similique dolorum explicabo. Consequuntur praesentium cumque expedita. Rem magnam officiis voluptates omnis ea dignissimos non ipsam quo neque aut natus quod eum error ullam minus, maiores repellendus ab perferendis dolor recusandae. Hic iste explicabo quia fugiat. Facilis rerum asperiores ad, maxime repellendus velit aliquam quis vitae explicabo id fuga suscipit et neque. Autem natus consequuntur at ut maiores sapiente numquam aliquid repellat rerum. Quae perferendis ratione, et dicta quo quam optio ad at possimus similique porro cum, hic nulla? Maiores sint possimus adipisci cum? Rerum culpa quia unde sequi possimus tempora, ea, nam consequatur enim dolor nostrum? Cupiditate reiciendis amet deleniti quam inventore dicta neque qui id fugit veritatis nemo, exercitationem explicabo enim nihil consequatur illum molestias et ullam temporibus! Voluptatem, quisquam reprehenderit optio quidem quasi consectetur amet eius ipsa aliquid officia exercitationem iusto blanditiis inventore placeat maxime voluptas similique ipsum voluptate voluptatum commodi facere, repudiandae magnam quam quia? Modi porro ipsam dolore ab nemo tenetur accusantium vitae. Facere expedita vero molestias molestiae vitae, magnam ea magni in repudiandae illum nisi harum doloribus velit, praesentium possimus soluta blanditiis saepe? Tenetur nesciunt non tempora, dicta qui ut saepe laboriosam modi, aliquid dignissimos quasi? A dolor, eos maiores, deleniti libero veritatis laborum magnam nobis, perferendis quidem quaerat fuga eum esse error sunt saepe perspiciatis. Labore magni, modi cupiditate voluptatibus dolore in velit temporibus quia voluptate iusto sunt, corrupti tempora qui reiciendis vel repudiandae dolorum non veritatis corporis consectetur illo nostrum. Ipsum eveniet a modi laborum quos natus quo repellendus assumenda amet quidem harum, fugiat incidunt magnam voluptatibus saepe. Odit adipisci et temporibus harum optio numquam quod veritatis eos nulla, officia quis itaque ut iste, culpa fugiat magni sunt. Cumque atque quod corrupti deleniti ducimus ut illo veniam esse repellendus accusamus aspernatur eligendi veritatis dolor delectus sint, optio eos. Quibusdam, neque facilis sequi laborum qui consectetur natus provident. Est, aliquam? Praesentium voluptate recusandae quas, explicabo placeat voluptas amet repellendus? Velit, soluta animi tempore error dolore aperiam fuga. Laborum deserunt suscipit velit laboriosam est vero cumque repellat, reiciendis alias ex nihil nemo possimus atque esse nulla sunt quae quibusdam quaerat beatae, omnis fugiat officia doloremque! Ipsum voluptatem eligendi vitae esse, doloremque rem perferendis quaerat impedit repudiandae, nulla neque vero enim? Cumque, dolor, quo doloremque animi quam rem praesentium, quia iste earum fugit necessitatibus sequi quibusdam? Ratione tenetur quis magnam. Culpa aspernatur non laborum ipsa at dignissimos aut est consequuntur natus maxime unde repellendus, porro repudiandae error rerum odit facere sit nemo. Commodi quas incidunt, similique nihil libero neque ullam quo accusantium, tempore fuga esse nostrum nisi sapiente quod aperiam. Quis sapiente sunt itaque, voluptatum, nesciunt minima aliquam ea deserunt aspernatur molestiae maiores aliquid corporis dolor neque officia porro eligendi hic? Tenetur in consequatur distinctio repellendus id possimus delectus. Sapiente saepe pariatur est ipsa numquam dolores minus quibusdam, animi doloremque porro incidunt maxime nemo debitis eum odio aliquam quo? Voluptates sint dicta sunt laboriosam architecto ex molestiae recusandae suscipit voluptate iure voluptatibus tempore, debitis nam pariatur repudiandae officia numquam? Voluptatem, deserunt? Corporis cumque dignissimos in, maiores eius corrupti odit? Repellendus incidunt magni ullam. Earum explicabo sapiente magni id, sed vel quis voluptatum iure aperiam adipisci nemo ex amet accusamus non natus libero autem impedit mollitia assumenda possimus ducimus voluptatem odit atque! Quibusdam qui temporibus, doloremque hic dolorem repellat alias, possimus enim necessitatibus cumque, doloribus minima aspernatur harum. Veritatis rem nihil officiis voluptatibus, aliquam labore quam quisquam porro autem ea explicabo iure optio mollitia neque, iste est amet id dicta! Officiis non exercitationem sunt minus obcaecati sequi fuga animi, quos doloremque a molestiae, quisquam magnam doloribus repellendus enim. Praesentium neque, ducimus dignissimos veniam illum deserunt, nemo sint quidem ea porro atque temporibus consequuntur. Repudiandae omnis rerum dolorem distinctio debitis, quod laboriosam voluptate repellat facilis? Consequuntur necessitatibus facere qui fuga rerum similique vitae blanditiis dolorem reprehenderit hic aliquam eos recusandae veritatis magnam, nobis facilis ratione architecto quaerat tempore, doloribus, officiis illum culpa. Rem natus nisi eos nobis mollitia corporis eius vitae impedit sint provident? Qui, neque? Vitae nulla vel ipsam alias placeat aspernatur voluptatum rem distinctio sit quos consequuntur aliquam, nostrum laudantium porro inventore nihil, quisquam optio. Ad officia eaque asperiores consectetur, vero porro eius cum reprehenderit nemo similique perspiciatis! Totam in blanditiis necessitatibus, debitis dolores sequi impedit excepturi voluptates quaerat, fugiat asperiores, quam temporibus laborum fugit maxime cum repellendus facere quisquam mollitia sint minus possimus. Aspernatur, dolore ullam. Illum deleniti dolore repellat nostrum veniam, voluptas mollitia magnam rem adipisci cupiditate. Dolorum laborum praesentium atque omnis ipsam repudiandae quae ratione dolore perferendis mollitia velit architecto ad vel nesciunt, magnam magni officia enim. Saepe temporibus aut id tenetur, odit hic, harum nihil eius autem eum, alias mollitia odio commodi magni quidem minus beatae animi! Voluptas, non pariatur aliquam fugiat adipisci sed, rerum dolore consequuntur, perferendis dicta delectus labore est dignissimos ipsa optio praesentium. Dolor in ipsum quam aperiam, expedita ullam ducimus est tempore impedit iusto cupiditate cum nisi molestias!',
  //     Keywords: 'keyword4, keyword5, keyword6'
  //   }
  //   // Add more content objects as needed
  // ]

  const { data } = useDataContext()
  const { stories } = data
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const SettingsModal = (
    <Modal show={showSettingsModal} onHide={() => setShowSettingsModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Settings</Modal.Title>
      </Modal.Header>
      <Modal.Body>{/* Add your settings content here */}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={() => setShowSettingsModal(false)}>
          Close
        </Button>
        {/* Add save or apply settings button if needed */}
      </Modal.Footer>
    </Modal>
  )

  return (
    <>
      <NavBar />
      <Outlet />

      <SliderComponent stories={stories} />
      {/* Step 4: Add the settings button */}
      <Button
        variant='primary'
        className='settings-button'
        onClick={() => setShowSettingsModal(true)}
      >
        Settings
      </Button>

      {/* Render the modal */}
      {SettingsModal}

      {/* <Options /> */}
      {/* <Options /> */}
    </>
  )
}
export default Home
