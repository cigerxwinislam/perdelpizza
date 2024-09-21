// Bismillahirahmanirahim



import React from 'react'
import KitchenSinkExample from './components/card'
import mm1 from '../public/mm1.JPG'

import mm2 from '../public/mmm2.JPG'

import mma from '../public/mmauber.png'
import { Container,Row,Col, Alert } from 'react-bootstrap'

function page() {
  return (
    <div>
      <Alert style={{background:"orange",}}>

 <h3>PerDelicious Pizza</h3> <p>Her çeşit pizza bulunur</p>

      </Alert>

<Alert style={{background:"orange",}}>

<h5>1.Kategori</h5> <p>...</p>

     </Alert>

<Row>

<Col><br></br>

<KitchenSinkExample wene={mm1} nav="Veggie"/>
    
  <br></br> <br></br>  <KitchenSinkExample wene={mm2} nav="Auber"/>

</Col>

<Col><br></br>

<KitchenSinkExample wene={mmv} nav="Veggie"/>
    
<br></br> <br></br><KitchenSinkExample wene={mma} nav="Auber"/>

</Col>

</Row>
<Alert style={{background:"orange",}}>

<h5>2.Kategori</h5> <p>...</p>

     </Alert>
     <Row>

<Col><br></br>

<KitchenSinkExample wene={mmv} nav="Veggie"/>
    
  <br></br> <br></br>  <KitchenSinkExample wene={mma} nav="Auber"/>

</Col>

<Col><br></br>

<KitchenSinkExample wene={mmv} nav="Veggie"/>
    
<br></br> <br></br><KitchenSinkExample wene={mma} nav="Auber"/>

</Col>

</Row>

    </div>
  )
}

export default page