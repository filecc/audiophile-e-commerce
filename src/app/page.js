import Image from 'next/image'
import Hero from './components/homepage/hero'
import Product from './components/homepage/product'
import Button from './components/utils/button'
import patternCircle from '/public/assets/home/desktop/pattern-circles.svg'
import zx9speaker from '/public/assets/home/mobile/image-speaker-zx9.png'
import zx7speaker from '/public/assets/home/mobile/image-speaker-zx7.jpg'
import yx1earphones from '/public/assets/home/mobile/image-earphones-yx1.jpg'
import zx9speakerTablet from '/public/assets/home/tablet/image-speaker-zx9.png'
import zx7speakerTablet from '/public/assets/home/tablet/image-speaker-zx7.jpg'
import yx1earphonesTablet from '/public/assets/home/tablet/image-earphones-yx1.jpg'
import zx9speakerDesktop from '/public/assets/home/desktop/image-speaker-zx9.png'
import zx7speakerDesktop from '/public/assets/home/desktop/image-speaker-zx7.jpg'
import yx1earphonesDesktop from '/public/assets/home/desktop/image-earphones-yx1.jpg'


export default function Home() {

  return (
    <>
    <main>
      {/* 
      *** HERO 
      */}
      <Hero />
      {/* 
      *** SECTION PREVIEW PRODUCTS
       */}
      <section className='px-4 py-16 md:flex justify-between lg:justify-center max-w-[689px] lg:max-w-[1110px] mx-auto'>
        <Product title={'headphones'} href={'/headphones'} />
        <Product title={'speakers'} href={'/speakers'} />
        <Product title={'earphones'} href={'/earphones'} />
      </section>

      {/* 
      *** SECTION PRODUCTS SHOW
       */}
      <section className='px-4 flex flex-col gap-8 items-center max-w-[689px] lg:max-w-[1110px] mx-auto'>
        <div className='bg-primary px-4 py-14 lg:py-6 rounded-lg relative flex flex-col items-center justify-center gap-8 md:gap-12 lg:flex-row lg:overflow-hidden lg:justify-between lg:px-10'>
          <Image
            src={patternCircle}
            alt='pattern'
            aria-hidden={true}
            className='absolute z-0 top-0 lg:-left-1/2 lg:translate-x-1/2 lg:opacity-40'
          />

          <div className='w-6/12 z-10 md:w-3/12 lg:w-5/12 lg:relative lg:top-1/2 lg:translate-y-16'>
            <Image
              className='md:hidden'
              src={zx9speaker}
              alt='zx9 speaker'
            />
            <Image
              className='hidden md:block lg:hidden'
              src={zx9speakerTablet}
              alt='zx9 speaker'
            />
            <Image
              className='hidden lg:block'
              src={zx9speakerDesktop}
              alt='zx9 speaker'
            />
          </div>

          <div className='text-white text-center lg:text-start flex flex-col items-center justify-center lg:items-start gap-6 z-10 md:gap-10 lg:w-5/12'>
            <h2 className='uppercase font-bold text-4xl lg:text-6xl px-10 lg:text-start  lg:px-0'>zx9 <br className='hidden lg:block' /> speaker</h2>
            <p className='opacity-80 text-[15px] md:w-6/12 lg:w-10/12'>
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
          <Image aria-hidden={true} src={zx7speaker} alt='zx7 speaker' className='rounded-lg md:hidden' />
          <Image aria-hidden={true} src={zx7speakerTablet} alt='zx7 speaker' className='rounded-lg hidden md:block lg:hidden' />
          <Image aria-hidden={true} src={zx7speakerDesktop} alt='zx7 speaker' className='rounded-lg hidden lg:block' />
          <div className='absolute top-1/2 -translate-y-1/2 ms-6 lg:px-10'>
            <h2 className='uppercase font-bold text-3xl py-8'>zx7 speaker</h2>
            <Button
              name={'see product'}
              href={'/'}
              border={'border-black border-[1px]'}
            />
          </div>
        </div>

        <div className='pb-12 md:flex lg:w-full'>
          <div className='md:w-6/12 md:pe-4'>
            <Image aria-hidden={true} src={yx1earphones} alt='yx1 speaker' className='rounded-lg md:hidden' />
            <Image aria-hidden={true} src={yx1earphonesTablet} alt='yx1 speaker' className='rounded-lg hidden md:block lg:hidden' />
            <Image aria-hidden={true} src={yx1earphonesDesktop} alt='yx1 speaker' className='rounded-lg hidden lg:block' />
          </div>
          <div className='bg-mute px-4 py-12 mt-8 rounded-lg flex flex-col gap-10 md:w-6/12 md:mt-0 md:justify-center md:px-12'>
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
    </>
  )
}
