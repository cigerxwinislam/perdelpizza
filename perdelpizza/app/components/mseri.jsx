// Bismillahirahmanirahim



import React from 'react'

import mml from '../../image/mlogo.jpg'

import Image from 'next/image'
export default function Mseri() {
  return (
    <div style={{alignItems:"center"}}>

<Image
      src={mml}
      alt="Picture of the author"
       width={355} 
      height={100} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    
    </div>
  )
}
