// Bismillahirahmanirahim



import React from 'react'

import { Row,Container,Col ,Alert} from 'react-bootstrap'

import KitchenSinkExample from './components/card'





import mm1 from '../image/mm5.jpg'

import mm9 from '../image/mm9.png'
import mm13 from '../image/mm13.jpg'
import mm15 from '../image/mm15.jpg'



import mm17 from '../image/mm17.jpg'
import mm19 from '../image/mm19.jpg'
import mm23 from '../image/mm23.jpg'







function page() {
  return (
    <div>

<Alert variant="secondary" style={{background:"white"}}>

<Alert style={{background:"orange"}}>Pizza Çesitlerimiz</Alert>



</Alert>






<Container>

<Row>

  <Col><KitchenSinkExample nav="" wene={mm1} />

<KitchenSinkExample nav="" wene={mm9}/>

<KitchenSinkExample nav="" wene={mm13} />

<KitchenSinkExample nav="" wene={mm15}/>

</Col>



  <Col><KitchenSinkExample nav="" wene={mm17}/>

<KitchenSinkExample nav="" wene={mm19} />

<KitchenSinkExample nav="" wene={mm23}/>

<KitchenSinkExample nav="" />

</Col>
</Row>


<Row>

  <Col></Col>

  <Col></Col>
</Row>




</Container>

<Alert variant="primary" style={{background:"white"}}>

<Alert style={{background:"orange"}}>Diğer</Alert>



</Alert>

<Container>

<Row>

  <Col><KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

</Col>



  <Col><KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

</Col>
</Row>


<Row>

  <Col></Col>

  <Col></Col>
</Row>




</Container>

<Alert variant="secondary" style={{background:"white"}}>

<Alert style={{background:"orange"}}>İçecek Çesitlerimiz</Alert>



</Alert>

<Container>

<Row>

  <Col><KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

</Col>



  <Col><KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

<KitchenSinkExample nav="" />

</Col>
</Row>


<Row>

  <Col></Col>

  <Col></Col>
</Row>




</Container>



    </div>
  )
}

export default page