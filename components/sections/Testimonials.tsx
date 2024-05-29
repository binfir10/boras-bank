'use client'
import React from 'react'
import BackLeft from '../background/BackLeft'
import { Reveal } from '../transitions/Reveal'
import { Slide } from '../Slide'

export default function Testimonials() {
  return (
    <section className='relative p-8 md:py-64' id='testimonials'>
      <BackLeft />
      <div className='grid max-w-5xl gap-8 mx-auto my-6 md:grid-cols-2'>
        <Reveal>
          <h2 className='text-5xl font-semibold mb-5'>
            Qué dicen los <span className='degradedBlue bg-blueLight' style={{ fontFamily: "var(--font-geist-mono)" }}>clientes</span> de nosotros

          </h2>
        </Reveal>

        <Reveal>
          <div className='self-center'>
            <p className='text-base'>
              Todo lo que necesitas para aceptar pagos con tarjeta y hacer crecer tu negocio en cualquier parte del mundo.
            </p>
          </div>

        </Reveal>



      </div>
        <Slide />
      
    </section>
  )
}
