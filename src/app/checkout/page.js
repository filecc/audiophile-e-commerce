"use client";
import { useContext, useState } from "react";
import { CartContext } from "../components/utils/CartContext";
import Link from "next/link";
import ShipInfo from "../components/cart/ShipInfo";
import billing from "/public/assets/data/billing.json";
import shipping from "/public/assets/data/shipping.json";

export default function Checkout() {
  const [state, setState] = useContext(CartContext)
  const products = state.filter((element) => element.quantity > 0);
  const [payment, setPayment] = useState('e-money')

  const handlePayment = (e) => {
    setPayment(e.target.id)
  }

  return (
    <div className="p-4 max-w-[689px] lg:max-w-[1110px] mx-auto">
      <Link className="opacity-40 font-medium pb-4 inline-block" href={"/"}>
        Go back
      </Link>
      <div className="rounded-2xl bg-white flex flex-col gap-6 py-6 px-6">
        <h1 className="uppercase text-3xl font-bold tracking-[1px]">
          checkout
        </h1>
        <h2 className="font-bold text-sm tracking-[1px] text-primary uppercase">
          billing details
        </h2>
        <div>
          {billing.map((element) => {
            return (
              <ShipInfo
                key={element.label}
                placeholder={element.placeholder}
                type={element.type}
                label={element.label}
              />
            );
          })}
        </div>

        <h2 className="font-bold text-sm tracking-[1px] text-primary uppercase">
          shipping info
        </h2>
        <div>
          {shipping.map((element) => {
            return (
              <ShipInfo
                key={element.label}
                placeholder={element.placeholder}
                type={element.type}
                label={element.label}
              />
            );
          })}
        </div>

        <h2 className="font-bold text-sm tracking-[1px] text-primary uppercase">
          payment details
        </h2>
        <div>
          <div className={"flex items-center pl-4 border border-gray-200 rounded-lg dark:border-gray-700 mb-4" 
          + ' ' 
          + (payment === 'e-money' && 'border-primary')} 
          onClick={handlePayment}>
            <input
              checked={payment === 'e-money'}
              readOnly
              id="e-money"
              type="radio"
              value=""
              name="e-money"
              className={"w-6 h-6 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"}
            />
            <label
              htmlFor="e-money"
              className="w-full py-5 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              e-Money
            </label>
          </div>
          <div className={"flex items-center pl-4 border border-gray-200 rounded-lg dark:border-gray-700"  + ' ' 
          + (payment === 'cash' && 'border-primary')} onClick={handlePayment}>
            <input
              checked={payment === 'cash'}
              readOnly
              id="cash"
              type="radio"
              value=""
              name="cash"
              className="w-6 h-6 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
            />
            <label
              htmlFor="cash"
              className="w-full py-5 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Cash on Delivery
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
