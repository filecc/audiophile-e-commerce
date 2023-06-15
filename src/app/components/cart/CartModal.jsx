'use client'
import { useContext } from "react"
import { CartContext } from "../utils/CartContext"
import Link from "next/link";
import Image from "next/image";
import Button from "../utils/button";

export default function CartModal({ setCartOpen }) {
    const [state, setState] = useContext(CartContext)
    const products = state.filter(element => element.quantity > 0)

    const handleCartQuantity = () => {
        let quantity = 0;
        products.forEach(element => {
            quantity += element.quantity
        });
        return quantity
    }


    const handleEmptyCart = () => {
        setState(state => ([{ quantity: 0, item: '' }]))
        setCartOpen(false)
    }

    

    const handleCartTotal = () => {
        let total = 0;
        products.forEach(element => {
            total += (element.item.price) * (element.quantity)
        });
        return total
    }
    console.log(products);

    const handleDecrementFromCart = (e) => {
        const id = e.target.getAttribute('data-id');

        const updatedState = state.map((element) => {
            if (element.item.id == id) {
                return { ...element, quantity: element.quantity -= 1 };
            }
            return element;
        });
        setState(updatedState);
    }

    const handleIncrementFromCart = (e) => {
        const id = e.target.getAttribute('data-id');

        const updatedState = state.map((element) => {
            if (element.item.id == id) {
                return { ...element, quantity: element.quantity += 1 };
            }
            return element;
        });
        setState(updatedState);
    }


    return (
        <div className="px-2 py-6">
            <div className="flex justify-between items-center">
                <h4 className="font-bold uppercase tracking-[1.29px] text-[18px]">Cart ({handleCartQuantity()})</h4>
                <div className="flex gap-2 text-[15px]">
                    <Link className="underline opacity-40 text-[15px]" href={'/'} onClick={handleEmptyCart}>Remove All</Link>
                    <button className="opacity-40" onClick={() => setCartOpen(false)}>Close</button>
                </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
                {products.map(element => {
                    const item = element.item
                    return (
                        <div key={item.id + '-' + item.name} className="flex justify-between items-center">
                            <div className="relative h-16 w-16">
                                <Image className="rounded-lg" src={item.image.mobile} alt={item.name} fill={true} />
                            </div>
                            <div className="w-4/12">
                                <h6 className="font-bold uppercase">{item.name}</h6>
                                <small className="text-sm opacity-40 font-bold">€ {item.price}</small>
                            </div>
                            <div className="w-4/12">
                                <div
                                    className={"uppercase text-xs tracking-[1px] font-bold px-6 py-3 bg-gray-100 flex justify-between items-center"}
                                >
                                    <button data-id={item.id} onClick={handleDecrementFromCart}>-</button>
                                    <p>{element.quantity}</p>
                                    <button disabled={element.quantity >= 5} data-id={item.id} onClick={handleIncrementFromCart}>+</button>
                                </div>

                            </div>
                        </div>
                    )
                })}
            </div>

            <div className="flex justify-between items-center pt-6">
                <p className="uppercase text-[15px] opacity-40">total</p>
                <p className="text-[18px] font-bold">€ {handleCartTotal().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
            </div>
            <div className="mt-6">
                <Button name={'checkout'} href={'#'} textColor={'text-white'} bgColor={'bg-primary'} />
            </div>

        </div>
    )
}