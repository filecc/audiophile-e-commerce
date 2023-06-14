'use client'
import Image from "next/image";
import Link from "next/link";
import Button from "../utils/button";
import { createUrl } from "../utils/functions";
import ProductsSummary from "./ProductsSummary";
import { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext";
import ButtonAction from "../utils/buttonAction";

export default function ProductDetail({ product }) {

  const [state, setState] = useContext(CartContext)
  const [itemToBuy, setItemToBuy] = useState(1)

  const handleIncrement = () => 
  {
    setState(state => ([...state, {quantity: itemToBuy, item: product}]))
  }

  return (
    <>
      <Link className="opacity-40 font-medium pb-4 inline-block" href={"/" + product.category}>Go back</Link>
     
      <div className="md:flex md:justify-between">
        <div className="relative h-[350px] md:h-[470px] w-full md:w-6/12 me-4">
          <Image
            className="object-cover md:hidden"
            src={product.image.mobile}
            alt={product.name}
            fill={true}
          />
          <Image
            className="object-cover hidden md:block"
            src={product.image.tablet}
            alt={product.name}
            fill={true}
          />
        </div>
        <div className="flex flex-col justify-center gap-6 pt-6 md:w-6/12 ps-4">
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
                  <button disabled={itemToBuy === 0} onClick={() => setItemToBuy(itemToBuy => itemToBuy - 1)}>-</button>
                  <p>{itemToBuy}</p>
                  <button disabled={itemToBuy >= 10} onClick={() => setItemToBuy(itemToBuy => itemToBuy + 1)}>+</button>
                </div>
              </div>
              <ButtonAction name={'add to cart'} bgColor={'bg-primary'} textColor={'text-white'} action={handleIncrement} />
            </div>

          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-6 mt-10">
        <h3 className="uppercase font-bold tracking-[1px] leading-9 text-2xl">
          features
        </h3>
        <p className="opacity-40 font-medium text-[15px] leading-6">{product.features}</p>
        <div className="md:flex md:justify-between">
          <h3 className="uppercase font-bold tracking-[1px] leading-9 text-2xl md:w-6/12 md:m-0 md:p-0 py-8">
            in the box
          </h3>
          <div className="flex flex-col items-start justify-center gap-3 w-full md:w-6/12">
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

      </div>
      <div className="flex flex-col gap-6 py-10 md:flex-row">
        <div className="flex flex-col gap-6 pt-10 md:w-6/12 md:pt-0">
          <div className="relative h-[174px]">
            <Image fill={true} className="object-cover rounded-lg" src={product.gallery.first.mobile} alt={product.name} />
          </div>
          <div className="relative h-[174px]">
            <Image fill={true} className="object-cover rounded-lg" src={product.gallery.second.mobile} alt={product.name} />
          </div>
        </div>

        <div className="relative h-[368px] md:w-6/12">
          <Image fill={true} className="object-cover rounded-lg" src={product.gallery.third.mobile} alt={product.name} />
        </div>
      </div>
      <h4 className="uppercase font-bold text-center text-2xl tracking-[1px] mb-8">you may also like</h4>
      <div className="flex flex-col items-stretch gap-6 md:flex-row md:justify-between md:gap-2">
        {product.others.map(element => {
          return <div key={element.slug} className="mb-8 flex flex-col gap-7 text-center md:w-4/12">
            <div className="relative h-[120px] md:h-[318px] rounded-lg">
              <Image className="w-full object-contain md:object-cover rounded-lg" fill={true} src={element.image.mobile} alt={element.name} />
            </div>
            <h5 className="text-center font-bold text-2xl uppercase tracking-[1.71px]">{element.name}</h5>
            <Button href={createUrl(element.slug)} bgColor={'bg-primary'} textColor={'text-white'} name={'see product'} />
          </div>
        })}
      </div>
      <div className="py-10">
        <ProductsSummary />
      </div>
    </>
  )
}