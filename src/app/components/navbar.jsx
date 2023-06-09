'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="h-[80px] flex lg:justify-between gap-6 items-center border-b border-light-gray w-full ">
      <div className="lg:hidden">
      <Image
          src={"/assets/shared/tablet/icon-hamburger.svg"}
          width={16}
          height={15}
          alt="hamburger"
          priority
        />
      </div>
      <div className="relative ms-auto md:ms-0">
        <Image
          src={"/assets/shared/desktop/logo.svg"}
          width={140}
          height={25}
          alt="logo"
          priority
        />
      </div>
      <div className="hidden w-9/12 lg:flex gap-6 justify-center items-center">
        {[
          {
            href: "/",
            name: "home",
          },
          {
            href: "/headephones",
            name: "headephones",
          },
          {
            href: "/speakers",
            name: "speakers",
          },
          {
            href: "/earphones",
            name: "earphones",
          },
        ].map((element) => {
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
      <div className="ms-auto">
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
  );
}
