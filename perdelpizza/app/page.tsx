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

  <Col><KitchenSinkExample nav="Beef Special" nivis="Özel pizza sosu muzarella peyniri kırmızı biber dana kavurma" wene={mm1} bttn="Büyük Boy= 199.90 TL" mbttn="Orta Boy=159.90 TL" mmbttn="Küçük Boy=199.90 TL" />

<KitchenSinkExample nav="Veggie" wene={mm9}/>

<KitchenSinkExample nav="Mexicano" wene={mm13} />

<KitchenSinkExample nav="" />

</Col>



  <Col><KitchenSinkExample nav="Chicken Bbq" wene={mm17}/>

<KitchenSinkExample nav="Bay Frodo" wene={mm19} />

<KitchenSinkExample nav="Turkish Special" wene={mm23}/>

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

<KitchenSinkExample nav="" bttn="Büyük Boy" mbttn="Orta Boy" mmbttn="Küçük Boy" />

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