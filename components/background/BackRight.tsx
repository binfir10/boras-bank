import Image from 'next/image'
import React from 'react'

export default function BackRight() {
  return (
    <div className='right-0 absolute -z-50 top-0'>
      <Image src='/assets/background-floated-right.png' width={850} height={650} alt='hero' />
      
    </div>
  )
}
