import './globals.css'
import { Inter } from 'next/font/google'
import { Manrope } from 'next/font/google'
import Navbar from './components/navbar'

const manrope = Manrope({ subsets: ['latin'] })


export const metadata = {
  title: 'audiophile',
  description: 'crafted by @filecc',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <div className='bg-dark-primary'>
          <div  className='max-w-[1100px] mx-auto px-4'>
            <Navbar />
          </div>
        </div>
        <div>
          {children}
        </div>

      
      </body>
    </html>
  )
}
