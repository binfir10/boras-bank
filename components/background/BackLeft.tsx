import Image from 'next/image'
import React from 'react'

export default function BackLeft() {
  return (
    <div className='absolute left-0 top-0 -z-50'>

      <Image src='/assets/background-floated-left.png' width={850} height={650} alt='hero' />
      
    </div>
  )
}
