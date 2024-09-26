// Bismillahirahmanirahim



import React from 'react'

import { Row,Container,Col } from 'react-bootstrap'

import KitchenSinkExample from './components/card'





import mb1 from '../public/mb9.jpg'

import mb2 from '../public/mb10.jpg'

import mb3 from '../public/mb11.jpg'

import mb4 from '../public/mb12.jpg'

import mb5 from '../public/mb13.jpg'

import mb6 from '../public/mb14.jpg'

import mb7 from '../public/mb15.jpg'

import mb8 from '../public/mb16.jpg'

import mb9 from '../public/mb17.jpg'



import mb11 from '../public/mb18.jpg'

import mb13 from '../public/mb1.jpg'

import mb15 from '../public/mb2.jpg'

import mb17 from '../public/mb3.jpg'

import mb19 from '../public/mb4.jpg'

import mb21 from '../public/mb5.jpg'

import mb23 from '../public/mb6.jpg'

import mb25 from '../public/mb13.jpg'

import mb27 from '../public/mb8.jpg'



function page() {
  return (
    <div>




<Container>

<Row>

<Col>

<KitchenSinkExample nav="Tonton" wene={mb1}/>

<KitchenSinkExample nav="Beef Soecial" wene={mb3}/>

</Col>

<Col>

<KitchenSinkExample nav="Mexicano" wene={mb5}/>

<KitchenSinkExample nav="Akdeniz" wene={mb7}/>

</Col>

</Row>

<Row>

<Col>

<KitchenSinkExample nav="Beef Soecial" wene={mb9}/>

<KitchenSinkExample nav="Cosmo" wene={mb11}/>

</Col>

<Col>

<KitchenSinkExample nav="Chicken Bbq" wene={mb15}/>

<KitchenSinkExample nav="Chicken Pesto " wene={mb17}/>

</Col>

</Row>

<Row>

<Col>

<KitchenSinkExample nav="Delicious Pizza"  />

<KitchenSinkExample nav="Chicken Bbq"wene={mb21}/>

</Col>

<Col>
 
<KitchenSinkExample nav="Turkish Special" wene={mb23}/>

<KitchenSinkExample nav="Veggie" wene={mb25}/>
<KitchenSinkExample nav="Bay Frodo" />

</Col>

</Row>
</Container>


    </div>
  )
}

export default page