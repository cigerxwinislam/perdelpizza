// Bismillahirahmanirahim

"use client"

import { MdWhatsapp } from "react-icons/md";

import { Alert, Button } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { WhatsAppWidget } from 'react-whatsapp-widget';
export function Tegihistin() {
  return (<div style={{position:"fixed",bottom:"0px"}}>
    <Alert style={{margin:7,color:"white",background:"orange"}} >
     <Button  href="tel:02164461021"><FaPhone  /></Button> Tuzla Merkez <span></span>



     <Button  href="tel:+905550101104"><FaPhone  /></Button> Aydınlı Şube


  </Alert>
    </div>
  );
}