'use client'
import 'swiper/css'
import React from 'react'
import BackRight from '../background/BackRight'
import { Swiper, SwiperSlide } from 'swiper/react'
import { dataPaymentMethods } from '@/lib/PaymentsMethodsData'
import Image from 'next/image'
import CtaDark from '../CtaDark'

export default function PaymentsMethods() {
  return (
    <section className='relative py-20 md:py-64' id='services'>
      <BackRight />
      <div className='relative w-full overflow-hidden'>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15
            }
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false
          }}
          grabCursor={true}
          loop={true}
          speed={2000}
        >
          <div className='absolute flex'>
            {
              dataPaymentMethods.map(({ id, image }) => (
                <SwiperSlide key={id} className='flex items-center slider-horizontal'>
                  <Image src={`/assets/${image}`} width={150} height={70} alt='payment' className='h-[60px] w-[120px] object-contain  ' />

                </SwiperSlide>
              ))
            }

          </div>

        </Swiper>

      </div>
      <CtaDark />
      
    </section>
  )
}
