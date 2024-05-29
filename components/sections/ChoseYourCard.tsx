'use client'
import React from 'react'
import BackRight from '../background/BackRight'
import { Reveal } from '../transitions/Reveal'
import { MotionTransition } from '../transitions/MotionTransition'
import {Swiper, SwiperSlide} from "swiper/react"
import { EffectCards } from 'swiper/modules'
import { dataCards } from '@/lib/ChoseYourCardData'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-cards'

export default function ChoseYourCard() {
  return (
    <section className='relative px-6 py-20 md:py-64' id='cards'>
      <BackRight />
      <div className='grid max-w-5xl mx-auto md:grid-cols-2'>
        <Reveal>
          <h2 className='text-5xl font-semibold'>
            Elegi la tarjeta que mas <br />
            <span className='degradedBlue bg-blueLight' style={{ fontFamily: "var(--font-geist-mono)" }}>se adapte a tus necesidades</span>

          </h2>
        </Reveal>
        <div className='px-5 max-lg:mt-4' >
          <MotionTransition>
            <Swiper
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {dataCards.map(({ id, image }) => (
                <SwiperSlide key={id}>
                  <Image src={image} width={400} height={300} alt='card' />

                </SwiperSlide>
              ))}

            </Swiper>
          </MotionTransition>

        </div>

      </div>
      
    </section>
  )
}
