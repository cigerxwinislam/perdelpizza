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
import mm77 from '../image/mm77.jpg'
import mm35 from '../image/mm35.jpg'
import mm12 from '../image/mm12.jpg'

import mm23 from '../image/mm23.jpg'
import mm55 from '../image/mm55.jpg'
import mm51 from '../image/mm35.jpg'




function page() {
  return (
    <div>

<Alert variant="secondary" style={{background:"white"}}>

<Alert style={{background:"orange"}}>Pizza Çesitlerimiz</Alert>



</Alert>






<Container>

<Row>

  <Col><KitchenSinkExample nav="Beef Special" nivis="Özel pizza sosu muzarella peyniri kırmızı biber dana kavurma" wene={mm1} bttn="Büyük Boy= 329.90 TL" mbttn="Orta Boy=299.90 TL" mmbttn="Küçük Boy=229.90 TL" />

<KitchenSinkExample nav="Bay Frodo" wene={mm9} nivis="özel pizza sos,mozzerella peyniri,sucuk,beyaz peynir,yeşil biber." bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=269.90 TL" mmbttn="Küçük Boy=199.90 TL"/>

<KitchenSinkExample nav="Mexicano" wene={mm13} nivis="Özel pizza sos,mozzerella peynir,sucuk,mantar,kırmızı biber" bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=259.90 TL" mmbttn="Küçük Boy=199.90 TL"/>

<KitchenSinkExample nav="Delicious" wene={mm77} nivis="özel pizza sos,mozzarella peyniri,sucuk,sosis,mantar,kırmızı biber,yeşil biber,siyah zeytin,mısır." bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=259.90 TL" mmbttn="Küçük Boy=199.90 TL" />

</Col>



  <Col><KitchenSinkExample nav="Chicken Bbq" nivis="özel pizza sos,mozzarella peyniri,sotelenmiş tavuk parçaları,özel bbq sos."  wene={mm17} bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=159.90 TL" mmbttn="Küçük Boy=199.90 TL"/>

<KitchenSinkExample nav="Veggie" wene={mm19} nivis="özel pizza sos,mozzarella peyniri,brokoli,cheri domates,kırmızı biber,yeşil biber,siyah zytin"  bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=269.90 TL" mmbttn="Küçük Boy=199.90 TL"/>

<KitchenSinkExample nav="Turkish Special" wene={mm23} nivis="özel pizza sos,mozzerella peyniri,pastırma,sucuk,mantar,kırmızı biber." bttn="Büyük Boy= 199.90 TL" mbttn="Orta Boy=159.90 TL" mmbttn="Küçük Boy=199.90 TL"/>

<KitchenSinkExample nav="Tonton" wene={mm35} nivis="özel pizza sos,mozzerella peyniri,ton balığı,mısır."   bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=259.90 TL" mmbttn="Küçük Boy=199.90 TL"/>

</Col>
</Row>


<Row>

  <Col><KitchenSinkExample nav="Cosmo" wene={mm55} nivis="özel pizza sos,mozzerella,sucuk."   bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=259.90 TL" mmbttn="Küçük Boy=199.90 TL"/>

  </Col>

  <Col><KitchenSinkExample nav="Pesto Mix" nivis="Özel pizza sos,muzarella peynir,janbon,sosis,mısır,cherry,domates,pesto" wene={mm12}   bttn="Büyük Boy= 299.90 TL" mbttn="Orta Boy=259.90 TL" mmbttn="Küçük Boy=199.90 TL"/>
  </Col>
</Row>




</Container>

<Alert variant="primary" style={{background:"white"}}>

<Alert style={{background:"orange"}}>Kampanyalar</Alert>



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