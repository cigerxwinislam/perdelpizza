// Bismillahirahmanirahim

"use client"

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css'

import Image from 'next/image';


import { Dropdown } from 'react-bootstrap';


function KitchenSinkExample (props:any) {
  return (
    <Card style={{ width: '25rem' }}>
 <Image
      src={props.wene}
      alt="Picture of the author"
       width={397} 
      height={397} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
      <Card.Body>
        <Card.Title>{props.nav}</Card.Title>
        <Card.Text>
     {props.nivis}
        </Card.Text>
      </Card.Body>
    
      <Card.Body>



      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Fiyatlar
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">{props.bttn}</Dropdown.Item>
        <Dropdown.Item href="#/action-2">{props.mbttn}</Dropdown.Item>
        <Dropdown.Item href="#/action-3">{props.mmbttn}</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;