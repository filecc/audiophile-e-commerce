'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className="h-[60px] flex gap-6 items-center border-b border-light-gray w-full ">
      <div className="relative w-2/12 h-8">
        <Image
          src={"/assets/shared/desktop/logo.svg"}
          fill={true}
          alt="logo"
          priority
        />
      </div>
      <div className="w-9/12 flex gap-6 justify-center items-center">
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
      <div className="w-1/12 flex justify-end">
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
