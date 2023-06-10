import Image from 'next/image'
import Hero from './components/homepage/hero'
import Product from './components/homepage/product'

export default function Home() {
  return (
    <main>
      <Hero />
      <section className='px-4 py-16 md:flex justify-between lg:justify-center'>
        <Product title={'headphones'} href={'/headphones'} />
        <Product title={'speakers'} href={'/speakers'} />
        <Product title={'earphones'} href={'/earphones'} />
      </section>
     
    </main>
  )
}
