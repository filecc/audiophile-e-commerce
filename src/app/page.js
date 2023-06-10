import Image from 'next/image'
import Hero from './components/homepage/hero'
import Product from './components/homepage/product'
import Button from './components/utils/button'
import zx9speaker from '/public/assets/home/mobile/image-speaker-zx9.png'
import zx7speaker from '/public/assets/home/mobile/image-speaker-zx7.jpg'
import patternCircle from '/public/assets/home/desktop/pattern-circles.svg'
import yx1earphones from '/public/assets/home/desktop/image-earphones-yx1.jpg'

export default function Home() {
  return (
    <main>
      {/* 
      *** HERO 
      */}
      <Hero />
      {/* 
      *** SECTION PREVIEW PRODUCTS
       */}
      <section className='px-4 py-16 md:flex justify-between lg:justify-center'>
        <Product title={'headphones'} href={'/headphones'} />
        <Product title={'speakers'} href={'/speakers'} />
        <Product title={'earphones'} href={'/earphones'} />
      </section>

      {/* 
      *** SECTION PRODUCTS SHOW
       */}
      <section className='px-4 flex flex-col gap-8'>
        <div className='bg-primary px-4 py-14 rounded-lg relative flex flex-col items-center justify-center gap-8'>
          <Image
            src={patternCircle}
            alt='pattern'
            aria-hidden={true}
            className='absolute z-0 top-0'
          />

          <div className='w-6/12 z-10'>
            <Image
              src={zx9speaker}
              alt='zx9 speaker'
            />
          </div>

          <div className='text-white text-center flex flex-col items-center justify-center gap-6'>
            <h2 className='uppercase font-bold text-4xl px-10 text-center'>zx9 speaker</h2>
            <p className='opacity-80 text-[15px]'>
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Button
              name={'see product'}
              href={'/'}
              bgColor={'bg-black'}
              textColor={'text-white'}
            />
          </div>
        </div>
       <div className='relative'>
        <Image aria-hidden={true} src={zx7speaker} alt='zx7 speaker' className='rounded-lg' />
        <div className='absolute top-1/2 -translate-y-1/2 ms-6'>
        <h2 className='uppercase font-bold text-3xl py-8'>zx7 speaker</h2>
        <Button
              name={'see product'}
              href={'/'}
              border={'border-black border-[1px]'}
            />
        </div>
       </div>

       <div className='pb-12'>
        <div>
        <Image aria-hidden={true} src={yx1earphones} alt='yx1 speaker' className='rounded-lg' />
        </div>
        <div className='bg-mute px-4 py-12 mt-8 rounded-lg flex flex-col gap-10 '>
        <h2 className='uppercase font-bold text-3xl'>yx1 earphones</h2>
        <Button
              name={'see product'}
              href={'/'}
              border={'border-black border-[1px]'}
            />
        </div>
       </div>
      </section>

    </main>
  )
}
