// Bismillahirahmanirahim



import React from 'react'
import KitchenSinkExample from './components/card'
import mmv from '../public/mmv.png'

import mme from '../public/mmmedit.png'

import mma from '../public/mmauber.png'
import { Container,Row,Col } from 'react-bootstrap'

function page() {
  return (
    <div>
<Container>

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

<Row>

     <Col>      <KitchenSinkExample wene={mme} nav="Auber"/>
     </Col>


</Row>

      </Container>
    </div>
  )
}

export default page