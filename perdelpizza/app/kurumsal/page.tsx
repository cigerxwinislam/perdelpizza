// Bismillahirahmanirahim

"use client"

import React from 'react'

import md1 from '../../image/dukkan1.jpg'

import md2 from '../../image/dukkan2.jpg'

import md3 from '../../image/dukkan3.jpg'
import  Image  from 'next/image'

function page() {
  return (


<Image
      src={md3}
      alt="Picture of the author"
       width={305} 
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  
  )
}

export default page