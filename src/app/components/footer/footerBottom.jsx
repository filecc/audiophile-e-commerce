import Image from 'next/image'
import logo from '/public/assets/shared/desktop/logo.svg'
import Link from 'next/link'
import links from '/public/assets/data/links.json'
import facebook from '/public/assets/shared/desktop/icon-facebook.svg'
import twitter from '/public/assets/shared/desktop/icon-twitter.svg'
import instagram from '/public/assets/shared/desktop/icon-instagram.svg'

export default function FooterBottom() {
    return (
        <div className="bg-dark-secondary text-white px-4 flex flex-col items-center md:items-start justify-center py-10 gap-10">
            <Image className='lg:hidden' src={logo} alt='logo' />
            <div className='flex flex-col justify-center items-center md:flex-row gap-4 lg:justify-between lg:w-full'>
                <Image className='hidden lg:block' src={logo} alt='logo' />
                <div className='flex flex-col justify-center items-center md:items-start gap-4 lg:gap-6 lg:flex-row'>
                    {links.map((element) => {
                        return (
                            <Link
                                key={element.href}
                                className={"uppercase font-bold text-[13px] tracking-[2px] cursor-pointer hover:text-primary transition-colors duration-500"}
                                href={element.href}
                            >
                                {element.name}
                            </Link>
                        );
                    })}
                </div>

            </div>
            <div className='px-6 md:px-0 md:w-6/12'>
                <p className='text-center md:text-start opacity-70 text-light-gray'>Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
            </div>
            <div className='flex flex-col gap-6 items-center md:flex-row md:justify-between md:w-full'>
                <small className='text-center opacity-70 text-light-gray inline-block'>Copyright 2021. All Rights Reserved</small>

                <div className='flex gap-4'>
                    <Link className='cursor-pointer' href={'/'}>
                        <Image src={facebook} alt='facebook icon' />
                    </Link>
                    <Link className='cursor-pointer' href={'/'}>
                        <Image src={twitter} alt='twitter icon' />
                    </Link>
                    <Link className='cursor-pointer' href={'/'}>
                        <Image src={instagram} alt='instagram icon' />
                    </Link>

                </div>
            </div>



        </div>
    )
}