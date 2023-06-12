import Image from "next/image";
import Link from "next/link";
import Button from "../utils/button";
import { createUrl } from "../utils/functions";

export default function ProductDetail({ product }) {
  return (
    <>
      <Link className="opacity-40 font-medium pb-4 inline-block" href={"/" + product.category}>Go back</Link>
      <div className="relative h-[350px] w-full">
        <Image
          className="object-cover"
          src={product.image.mobile}
          alt={product.name}
          fill={true}
        />
      </div>
      <div className="flex flex-col gap-6 pt-6">
        {product.new && (
          <p className="uppercase tracking-[10px] text-primary">
            new product
          </p>
        )}
        <h2 className="uppercase text-3xl font-bold tracking-[1px]">
          {product.name}{" "}
        </h2>
        <p className="opacity-40 text-[15px] leading-6">{product.description}</p>
        <p className="font-bold tracking-[1.3px]">€ {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div>
          <div className="flex justify-start items-center gap-4">
            <div className="w-4/12">
              <div
                className={"uppercase text-xs tracking-[1px] font-bold px-6 py-3 bg-gray-100 flex justify-between items-center"}
              >
                <button>-</button>
                <p>1</p>
                <button>+</button>
              </div>
            </div>
            <Button name={'add to cart'} bgColor={'bg-primary'} textColor={'text-white'} href={"/" + product.category} />
          </div>

        </div>
      </div>
      <div className="flex flex-col justify-center gap-6 mt-10">
        <h3 className="uppercase font-bold tracking-[1px] leading-9 text-2xl">
          features
        </h3>
        <p className="opacity-40 font-medium text-[15px] leading-6">{product.features}</p>
        <h3 className="uppercase font-bold tracking-[1px] leading-9 text-2xl">
          in the box
        </h3>
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          {product.includes.map((element) => {
            return (
              <div
                key={element.item}
                className="flex justify-between items-center w-full"
              >
                <small className="w-1/12 text-primary font-bold text-[15px]">
                  {element.quantity}x
                </small>
                <p className="w-11/12 font-medium text-[15px] opacity-40">
                  {element.item}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-6 py-10">
        {
          ['first', 'second', 'third'].map(element => {
            return <div key={element} className={"relative "
              + (element === 'third' ? 'h-[368px]' : 'h-[174px]')}>
              <Image fill={true} className="object-cover rounded-lg" src={product.gallery[element].mobile} alt={product.name} />
            </div>
          })
        }
      </div>
      <h4 className="uppercase font-bold text-center text-2xl tracking-[1px] mb-8">you may also like</h4>
      <div className="flex flex-col items-stretch gap-6">
        {product.others.map(element =>
        {return <div key={element.slug} className="mb-8 flex flex-col gap-7 text-center">
            <div className="relative h-[120px] rounded-lg">
              <Image className="w-full object-cover rounded-lg" fill={true} src={element.image.mobile} alt={element.name} />
            </div>
            <h5 className="text-center font-bold text-2xl uppercase tracking-[1.71px]">{element.name}</h5>
            <Button href={createUrl(element.slug)} bgColor={'bg-primary'} textColor={'text-white'} name={'see product'} />
        </div>})}
      </div>
    </>
  )
}