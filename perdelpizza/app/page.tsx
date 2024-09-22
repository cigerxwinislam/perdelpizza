// Bismillahirahmanirahim



import React from 'react'
import KitchenSinkExample from './components/card'
import mm1 from '../public/mm1.JPG'


import mm6 from '../public/mm6.JPG'

import mm7 from '../public/mm7.JPG'

import mm8 from '../public/mm8.JPG'

import mm9 from '../public/mm9.JPG'

import mm10 from '../public/mm10.JPG'

import mm11 from '../public/mm21.JPG'

import mm12 from '../public/mm17.JPG'

import mm13 from '../public/mm13.JPG'

import mm14 from '../public/mm14.JPG'
import { Container,Row,Col, Alert } from 'react-bootstrap'

function page() {
  return (
    <div>
      <Alert style={{background:"orange",}}>

 <h3>PerDelicious Pizza</h3> <p>Her çeşit pizza bulunur</p>

      </Alert>



<Row>

<Col><br></br>

<KitchenSinkExample wene={mm1} nav="Veggie"/>
    
  <br></br> <br></br>  <KitchenSinkExample wene={mm2} nav="Auber"/>

</Col>

<Col><br></br>

<KitchenSinkExample wene={mm5} nav="Pesto Mix Special"/>
    
<br></br> <br></br><KitchenSinkExample wene={mm12} nav="Mexsicano"/>

</Col>

</Row>
<Alert style={{background:"orange",}}>


     </Alert>
     <Row>

<Col><br></br>

<KitchenSinkExample wene={mm11} nav="Akdeniz"/>
    
  <br></br> <br></br>  <KitchenSinkExample wene={mm13} nav="Cosmo"/>

</Col>



</Row>

    </div>
  )
}

export default page