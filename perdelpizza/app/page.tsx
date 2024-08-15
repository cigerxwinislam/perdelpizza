// Bismillahirahmanirahim



import React from 'react'
import KitchenSinkExample from './components/card'
import mmv from '../public/mmv.png'

import mme from '../public/mmmedit.png'

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

<KitchenSinkExample wene={mmv} nav="Veggie"/>
    
  <br></br> <br></br>  <KitchenSinkExample wene={mma} nav="Auber"/>

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