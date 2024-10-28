// Bismillahirahmanirahim



import React from 'react'
import KitchenSinkExample from '../components/card'
import Image from 'next/image';

import mml from '../../image/1_page-0001.jpg'
function page() {
  return (
    <div>

<Image
      src={mml}
      alt="Picture of the author"
       width={355} 
      height={500} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />




</div>
  )
}

export default page