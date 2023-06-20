'use client'
import footerImage from '/public/assets/shared/mobile/image-best-gear.jpg'
import footerImageTablet from '/public/assets/shared/tablet/image-best-gear.jpg'
import footerImageDesktop from '/public/assets/shared/desktop/image-best-gear.jpg'
import Image from 'next/image'
import { useSelectedLayoutSegment } from 'next/navigation'

export default function FooterTop()
{
    const segment = useSelectedLayoutSegment()
    console.log(segment)
    return (
        <div>
       {segment != 'checkout' && <div className='flex flex-col items-center px-4 gap-8 py-6 lg:flex-row lg:justify-between lg:gap-0 pb-32'>
        <div>
            <Image className='rounded-lg md:hidden' src={footerImage} alt="man wearing headphones" />
            <Image className='rounded-lg hidden md:block lg:hidden' src={footerImageTablet} alt="man wearing headphones" />
        </div>
       
        <div className='lg:w-6/12 lg:pe-24'>
        <div className='text-center lg:text-start'>
                <h2 className='uppercase text-3xl font-bold px-4 lg:px-0'>Bringing you the <br className='hidden lg:block' /> <span className='text-primary'>best</span> audio gear</h2>
           </div>
           <div className='text-center lg:text-start opacity-40 font-medium leading-6 text-[15px] px-4 lg:px-0 py-6'>
            <p>
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
            </p>
           </div>
        </div>
        <div className='lg:w-5/12'>
            <Image className='rounded-lg hidden lg:block' src={footerImageDesktop} alt="man wearing headphones" />
        </div>
           
        </div>}
        </div>
    )
}