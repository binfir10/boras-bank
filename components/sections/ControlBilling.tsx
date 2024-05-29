import React from 'react'
import { MotionTransition } from '../transitions/MotionTransition'
import Image from 'next/image'
import { Reveal } from '../transitions/Reveal'

export default function ControlBilling() {
  return (
    <section className='p-4 py-20 md:py-64'>
      <div className='flex flex-col-reverse max-w-5xl mx-auto md:flex-row place-content-evenly'>
        <MotionTransition className='flex-1 p-6 md:p-8'>
          <Image src="/assets/control-business.png" width={580} height={410} className='w-full h-auto object-cover ' alt='billing' />



        </MotionTransition>

        <div className='flex-1 p-6 md:p-8'>
          <Reveal>
            <h2 className='text-5xl font-semibold'>
              Controla facilmente <br />
              <span className='degradedBlue bg-blueLight' style={{ fontFamily: "var(--font-geist-mono)" }}>

              tu facturación
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='maxw-md mt-10 '> 
              Con la tarjeta de crédito adecuada, puede mejorar su vida
              financiera generando crédito, obteniendo recompensas y
              ahorrando dinero. Pero con cientos de tarjetas de crédito en
              el mercado.

            </p>
          </Reveal>

        </div>
      </div>
      
    </section>
  )
}
