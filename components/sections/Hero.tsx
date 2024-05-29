import React from 'react'
import BackRight from '../background/BackRight'
import Link from 'next/link'
import Image from 'next/image'
import { Reveal } from '../transitions/Reveal'
import { MotionTransition } from '../transitions/MotionTransition'

export default function Hero() {
  return (
    <section className='relative p-4 md:py-40 ' >

      <BackRight />
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div className='flex flex-col items-center md:items-start'>
          <Reveal>

          <h1 className='text-3xl md:text-5xl font-semibold max-lg:text-center '> El Nuevo
            <span className='block degradedBlue bg-blueLight' style={{ fontFamily: "var(--font-geist-mono)" }} >
              banco digital
            </span>
            para todos

          </h1>
          </Reveal>
          <Reveal>

          <p className='max-w-md mt-10'>
            Nuestro equipo de expertos utiliza una metodología
            para identificar las tarjetas de crédito que probablemente
            se ajusten a sus necesidades. Examinamos tasas
            porcentuales anuales, tarifas anuales.
          </p>
          </Reveal>
          <Reveal>

          <div className='my-8'>
            <Link href="#clientes" className='px-4 py-3 rounded-md bg-blueRadial '>Empieza Ahora </Link>

          </div>
          </Reveal>
         
        </div>
        <figure>
          <MotionTransition>

          <Image src={'/assets/cards-block.png'} alt='hero' width={500} height={500} />
          </MotionTransition>
        </figure>
      </div>
    </section>
  )
}
