'use client'
import { useContext, useState } from "react";
import { CartContext } from "../utils/CartContext";
import checkMark from '/public/assets/checkout/icon-order-confirmation.svg'
import Image from "next/image";
import Button from "../utils/button";
import ButtonAction from "../utils/buttonAction";
import { useRouter } from "next/navigation";

export default function PaymentModal() {
    const [state, setState] = useContext(CartContext);
    const products = state.filter((element) => element.quantity > 0);
    const item = products[0].item
    const router = useRouter()

    const handleCartTotal = () => {
        let total = 0;
        products.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    };

    const emptyCart = () => {
        router.push('/')
        setTimeout(() => {
            setState([{
                quantity: 0,
                item: ''
            }]);
        }, 200)


    }

  

    return (
        <div className="fixed w-full h-full bg-slate-800 bg-opacity-30 top-0 left-0 bottom-0 flex justify-center items-center z-10">
            <div className="bg-white rounded-lg w-11/12 md:w-9/12 lg:w-5/12 px-6 md:px-12 py-8 md:py-10 flex flex-col gap-4">
                <Image src={checkMark} alt="confirmed" />
                <div>
                    <h2 className="font-bold text-2xl tracking-wide uppercase md:text-3xl">thank you  <br /> for your order</h2>
                </div>
                <div>
                    <p className="opacity-40 text-sm">
                        You will receive an email confirmation shortly.
                    </p>
                </div>
                <div className="md:flex">

                
                <div className="rounded-lg md:rounded-none md:rounded-tl-lg md:rounded-bl-lg md:w-7/12 bg-body-bg px-6 py-4">
                    <div
                        className="flex justify-between items-center"
                    >
                        <div className="relative h-16 w-16">
                            <Image
                                className="rounded-lg"
                                src={item.image.mobile}
                                alt={item.name}
                                fill={true}
                            />
                        </div>
                        <div className="w-6/12">
                            <h6 className="font-bold uppercase">{item.name}</h6>
                            <small className="text-sm opacity-40 font-bold">
                                € {item.price}
                            </small>
                        </div>
                        <div className="w-2/12">
                            <div
                                className={
                                    "uppercase text-xs tracking-[1px] font-bold flex justify-between items-center md:justify-end"
                                }
                            >
                                <p>x {products[0].quantity}</p>
                            </div>
                        </div>
                    </div>
                    {(products.length - 1 > 0) && <div className="py-2 border-t mt-3">
                        <p className="text-center text-xs opacity-40 font-bold">and {products.length - 1} other item(s)</p>
                    </div>}

                </div>
                <div className="bg-black w-full rounded-b-lg px-6 py-4 md:w-5/12 md:rounded-none md:rounded-tr-lg md:rounded-br-lg">
                    <h2 className="text-slate-300 opacity-80 font-bold text-lg tracking-wide uppercase">grand total</h2>
                    <p className="text-white font-bold text-lg">€
                        {handleCartTotal().toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                </div>
                </div>
                <div>
                    <ButtonAction action={emptyCart} name={'back home'} href={'/'} bgColor={'bg-primary'} textColor={'text-white text-center'} width={'w-full'} />
                </div>
            </div>
        </div>
    )
}