'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import links from '/public/assets/data/links.json'
import { useContext, useState } from "react";
import { CartContext, CartContextProvider } from "./utils/CartContext";
import Product from "./homepage/product";
import { motion } from "framer-motion"
import CartModal from "./cart/CartModal";


export default function Navbar() {
  const pathname = usePathname()
  const [state, setState] = useContext(CartContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const handleCartQuantity = () => {
    let quantity = 0;
    state.forEach(element => {
      quantity += element.quantity
    });
   return quantity
  }

  return (
    <>
    <header className="h-[80px] flex lg:justify-between gap-6 items-center border-b border-light-gray w-full ">
    
      <div className="lg:hidden cursor-pointer" onClick={()=>setMenuOpen(!menuOpen)}>
      <Image
          src={"/assets/shared/tablet/icon-hamburger.svg"}
          width={16}
          height={15}
          alt="hamburger"
          priority
        />
      </div>
      <div className="relative ms-auto md:ms-0">
      <Link href={'/'} onClick={() => (setMenuOpen(false))}>
      <Image
          src={"/assets/shared/desktop/logo.svg"}
          width={140}
          height={25}
          alt="logo"
          priority
        />
      </Link>
        
      </div>
      <div className="hidden w-9/12 lg:flex gap-6 justify-center items-center">
        {links.map((element) => {
          const isActive = pathname === element.href
          return (
            <Link
              key={element.href}
              className={
                (isActive ? 'text-primary ' : 'text-white ') +
                " uppercase font-bold text-sm tracking-[2px] cursor-pointer hover:text-primary transition-colors duration-500"
                }
              href={element.href}
            >
              {element.name}
            </Link>
            
          );
        })}
      </div>
      <div className="ms-auto flex items-center gap-2" onClick={()=>setCartOpen(!cartOpen)}>
      <div className="">
      {handleCartQuantity() > 0 && <span className="text-white grid place-items-center bg-primary h-6 w-6 rounded-full font-bold">{handleCartQuantity()}</span>}
        
      </div>
        <Image
          src={"/assets/shared/desktop/icon-cart.svg"}
          width={23}
          height={20}
          alt="logo"
          className="cursor-pointer"
          priority
        />
      </div>
    </header>
      <motion.div layout className="bg-white w-full rounded-b lg:hidden" style={{height: menuOpen ? 'auto' : 0}}>
      {menuOpen && <section className='px-4 pt-16 pb-4 md:flex justify-between max-w-[689px] lg:max-w-[1110px] mx-auto'>
            <Product title={'headphones'} href={'/headphones'} menu={setMenuOpen}  />
            <Product title={'speakers'} href={'/speakers'} menu={setMenuOpen} />
            <Product title={'earphones'} href={'/earphones'} menu={setMenuOpen} />
        </section>}
      </motion.div>
      <motion.div layout className="bg-white w-full rounded" style={{height: cartOpen ? 'auto' : 0}}>
      {cartOpen && <section className='px-4 mt-8 md:flex justify-between max-w-[689px] lg:max-w-[1110px] mx-auto shadow-lg'>
            <CartModal itemsTotal={handleCartQuantity()} setCartOpen={setCartOpen} />
        </section>}
      </motion.div>
    </>
  );
}
