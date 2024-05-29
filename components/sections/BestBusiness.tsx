import React from 'react'
import BackLeft from '../background/BackLeft'
import { Reveal } from '../transitions/Reveal'
import Link from 'next/link'
import { dataFeaturesBusiness } from '../../lib/BestBusinessData'
import Image from 'next/image'

export default function BestBusiness() {
  return (
    <section className='relative px-6 py-20 md:py-64' id='features'>
      <BackLeft />
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <div>
          <Reveal>
            <h2 className='text-5xl font-semibold'>
              Vos haces el negocio  
              <span style={{ fontFamily: "var(--font-geist-mono)" }} className='block degradedBlue bg-blueLight'>
                nosotros manejamos
                <br />
                el dinero
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className='max-w-md mt-10'>
              Con la tarjeta de crédito adecuada, puede mejorar su vida
              financiera generando crédito, obteniendo recompensas y
              ahorrando dinero. Pero con cientos de tarjetas de crédito en
              el mercado.
            </p>
          </Reveal>
          <Reveal>
            <div className='my-8'>
              <Link href="#clients" className='px-4 py-3 rounded-md bg-blueRadial '>Elegi tu plan</Link>
            </div>

          </Reveal>

        </div>
        <div className='grid items-center py-5 md:p-8'>
          {dataFeaturesBusiness.map(({ id, icon, title, description }) => (

            <Reveal key={id}>
              <div className='grid grid-flow-col gap-5 px-4 py-2 rounded-3xl group hover:bg-blueRadial'>
                <Image src={`/assets/${icon}.png`} alt={title} width={40} height={40} />
                <div>
                  <h4 className='text-xl font-semibold'> {title}</h4>
                  <p className='text-sm '>{description}</p>
                </div>

              </div>


            </Reveal>
          ))}

        </div>

      </div>
      
    </section>
  )
}
