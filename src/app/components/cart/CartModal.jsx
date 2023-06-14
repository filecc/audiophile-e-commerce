import { useContext } from "react"
import { CartContext } from "../utils/CartContext"
import Link from "next/link";
import Image from "next/image";

export default function CartModal({ setCartOpen }) {
    const [state, setState] = useContext(CartContext)

    const handleCartQuantity = () => {
        let quantity = 0;
        state.forEach(element => {
            quantity += element.quantity
        });
        return quantity
    }

    

    const handleEmptyCart = () => {
        setState(state => ([{ quantity: 0, item: '' }]))
        setCartOpen(false)
    }

    const products = state.filter(element => element.quantity > 0)
    const handleCartTotal = () => {
        let total = 0;
        products.forEach(element => {
            total += element.item.price
        });
        return total
    }
    console.log(products);

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
                                hello
                            </div>
                        </div>
                    )
                })}
            </div>
            total: {handleCartTotal()}
        </div>
    )
}