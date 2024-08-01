// Bismillahirahmaniraahim



import React from 'react'
import { Alert, Col, Container,Row } from 'react-bootstrap'
import KitchenSinkExample from '../components/card'

import a from '../../public/a.jpeg'

import b from '../../public/b.jpeg'

import c from '../../public/c.jpeg'

import d from '../../public/d.jpeg'

import  e from '../../public/e.jpeg'

import k from '../../public/k.jpeg'

import l from '../../public/l.jpeg'

import t from '../../public/t.jpeg'

import g from '../../public/g.jpeg'

import h from '../../public/h.jpeg'

import m from '../../public/m.jpeg'



function page() {
  return (
    <div>

  <Alert>    <h3 >Projeler</h3></Alert>
<Container>

<Row>
<Col> <KitchenSinkExample  wene={a} /> </Col>

<Col> <KitchenSinkExample  wene={m}/> </Col>

</Row>

<Row>

<Col> <KitchenSinkExample  wene={e}/> </Col>

<Col> <KitchenSinkExample  wene={c}/> </Col>

</Row>




<Row>

<Col> <KitchenSinkExample wene={k}/> </Col>

<Col> <KitchenSinkExample wene={h}/> </Col>


</Row>
<Row>

<Col> <KitchenSinkExample wene={l}/> </Col>

<Col> <KitchenSinkExample wene={g}/> </Col>


</Row>

</Container>


    </div>
  )
}

export default page