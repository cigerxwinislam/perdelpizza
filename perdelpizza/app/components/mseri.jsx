// Bismillahirahmanirahim



import React from 'react'

import mml from '../../image/mlogo1.jpg'

import Image from 'next/image'
export default function Mseri() {
  return (
    <div style={{alignItems:"center"}}>

<Image
      src={mml}
      alt="Picture of the author"
       width={259} 
      height={105} 
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
    
    </div>
  )
}
