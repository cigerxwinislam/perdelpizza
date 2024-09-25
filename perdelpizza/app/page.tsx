// Bismillahirahmanirahim



import React from 'react'

import { Row,Container,Col } from 'react-bootstrap'

import KitchenSinkExample from './components/card'
function page() {
  return (
    <div>




<Container>

<Row>

<Col>

<KitchenSinkExample nav="Mexicano"/>

<KitchenSinkExample nav="Margherita"/>

</Col>

<Col>

<KitchenSinkExample nav="Cosmo"/>

<KitchenSinkExample nav="Pesto Mix Special"/>

</Col>

</Row>

<Row>

<Col>

<KitchenSinkExample nav="Beef Soecial"/>

<KitchenSinkExample nav="Tırkish Special"/>

</Col>

<Col>

<KitchenSinkExample nav="Tonton"/>

<KitchenSinkExample nav="Chicken Pesto"/>

</Col>

</Row>

<Row>

<Col>

<KitchenSinkExample nav="Delicious Pizza"/>

<KitchenSinkExample nav="Chicken Bbq"/>

</Col>

<Col>

<KitchenSinkExample nav="Bay Frodo"/>

<KitchenSinkExample nav="Veggie"/>

</Col>

</Row>
</Container>


    </div>
  )
}

export default page