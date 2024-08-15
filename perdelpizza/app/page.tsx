// Bismillahirahmanirahim



import React from 'react'
import KitchenSinkExample from './components/card'
import mmv from '../public/mmv.png'

import mme from '../public/mmmedit.png'

import mma from '../public/mmauber.png'

function page() {
  return (
    <div>







     <KitchenSinkExample wene={mmv} nav="Veggie"/>
    
      <KitchenSinkExample wene={mma} nav="Auber"/>

      <KitchenSinkExample wene={mme} nav="Auber"/>

    </div>
  )
}

export default page