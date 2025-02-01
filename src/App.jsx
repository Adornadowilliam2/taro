import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data = [
    {
      id:1,
      image:"https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbERq_aL7Nej4e_fjN0OZY9qMp4g9JirfV5VKZgJr7FSdM7NE2i_1c3Nep4NDwnBo9r-a5_qAuko9O_FG-n4-oHa7oK1VDBwf8sn.jpg?r=acd"
    },
    {
      id:2,
      image:"https://external-preview.redd.it/sakamoto-days-new-visual-v0-vKVFk-1pooDf6W_4Ea8JEqAzUHjceUdKtTpsM008ZUc.jpg?auto=webp&s=9d935b5b572fe79532ac0e3981fe492332e17a99"
    },
    {
      id:3,
      image:"https://lh4.googleusercontent.com/proxy/cyL_la5_WbDuUGaD4SbSx0NJ16C-kehIUN7GLot6zyl1xz8Tc60iqGiI3webSxl17hWhzH58H3Go3oi7pC-Eo8V1OipG6WstMbDLOOdJAeR0O9cEpQNBwCVHimi9TByHWfuboVaUYCBvHgov1_1PyrIcHhsNvxA5iT0DEmiM_Q"
    },
    {
      id:4,
      image: "https://comicbook.com/wp-content/uploads/sites/4/2024/05/0c42e848-94d5-421b-b58e-5f9b98dfdb4d.jpg?w=1024"
    },
    {
      id:5,
      image:"https://jumpg-assets.tokyo-cdn.com/secure/title/100127/title_thumbnail_portrait_list/313621.jpg?hash=0HpK9-UWS7urxNciRiGxQQ&expires=2145884400"
    },
    {
      id:6,
      image:"https://dkeonvn7j9sk.cloudfront.net/wp-content/uploads/2024/05/27100918/SakamotoDaysAnimeAnnounced.jpg"
    },
    {
      id:7,
      image:"https://i5.walmartimages.com/seo/Sakamoto-Days-Sakamoto-Days-Vol-5-Series-5-Paperback_9c72c1c1-8cb7-4ac2-a2fd-e867db85a2aa.3ba380dccce9f974dd5bf230b6333975.jpeg"
    },
    {
      id:8,
      image:"https://preview.redd.it/is-yuto-suzukis-sakamoto-days-is-a-great-manga-for-beginners-v0-syvls5he0igd1.jpeg?width=640&crop=smart&auto=webp&s=35b6c6fd852b7af0ef5b2e71bdc6244cc4a7af55"
    }
  ];
  return (
    <>
    <nav className='text-white bg-gray-500'><span>Sakamoto Gallery</span></nav>
    <main className='p-5 flex items-center flex-wrap justify-evenly gap-5'>
    {
      data.map((item)=>(
        <div key={item.id} className='img'> 
          <img src={item.image} alt={item.id} />
        </div>
      ))
    }
    </main>
    </>
  )
}

export default App
