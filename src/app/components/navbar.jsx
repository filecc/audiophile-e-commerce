import Image from "next/image";

export default function Navbar() {
  return (
    <header className="container bg-slate-800 h-[60px] flex gap-6 items-center">
      <div className="relative w-2/12 h-8">
        <Image
          src={"/assets/shared/desktop/logo.svg"}
          fill={true}
          alt="logo"
          priority
        />
      </div>
      <div className="w-9/12 flex gap-6 justify-center items-center">
        {
            ['home', 'headephones', 'speakers', 'earphones'].map(element => {
                return <a key={element} className="text-white uppercase font-bold text-sm">{element}</a>
            })
        }
      </div>
      <div className="w-1/12 relative h-8">
        <Image
            src={"/assets/shared/desktop/icon-cart.svg"}
            fill={true}
            alt="logo"
            priority
            />
      </div>

    </header>
  );
}
