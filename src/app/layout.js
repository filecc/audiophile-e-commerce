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
        <div className='max-w-[1100px] mx-auto'>
          <Navbar />
          {children}
        </div>

      
      </body>
    </html>
  )
}
