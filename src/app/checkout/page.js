"use client";
import { useContext, useState } from "react";
import { CartContext } from "../components/utils/CartContext";
import Link from "next/link";
import ShipInfo from "../components/cart/ShipInfo";
import billing from "/public/assets/data/billing.json";
import shipping from "/public/assets/data/shipping.json";
import Image from "next/image";
import ButtonAction from "../components/utils/buttonAction";
import PaymentModal from "../components/cart/PaymentModal";
import { useRouter } from "next/navigation";
import Button from "../components/utils/button";

export default function Checkout() {
  const [state, setState] = useContext(CartContext);
  const products = state.filter((element) => element.quantity > 0);
  const [payment, setPayment] = useState("e-money");
  const [modal, setModalOpen] = useState(false)
  const router = useRouter()

  const handlePayment = (e) => {
    setPayment(e.target.id);
  };


  const handleCartTotal = () => {
    let total = 0;
    products.forEach((element) => {
      total += element.item.price * element.quantity;
    });
    return total;
  };



  return (
    (products.length > 0) ?
    <div className="p-4 max-w-[689px] lg:max-w-[1110px] mx-auto mb-20">
      <Link className="opacity-40 font-medium pb-4 inline-block" href={"/"}>
        Go back
      </Link>
      <div className="lg:flex lg:gap-6 lg:items-start">

      <div className="rounded-2xl bg-white flex flex-col gap-6 py-6 px-6">
        <h1 className="uppercase text-3xl font-bold tracking-[1px]">
          checkout
        </h1>
        <h2 className="font-bold text-sm tracking-[1px] text-primary uppercase">
          billing details
        </h2>
        <div className="md:flex md:flex-wrap">
          {billing.map((element) => {
            return (
              <ShipInfo
                width={'md:w-6/12 md:px-2'}
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
        <div className="md:flex md:flex-wrap">
          {shipping.map((element, index) => {
            return (
              <ShipInfo
                width={index === 0 ? 'md:w-full' : 'md:w-6/12 px-2'}
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
        <div className="md:flex md:gap-4">
          <div
            className={
              "flex items-center pl-4 border border-gray-200 rounded-lg mb-4 md:w-6/12" +
              " " +
              (payment === "e-money" && "border-primary")
            }
            onClick={handlePayment}
          >
            <input
              checked={payment === "e-money"}
              readOnly
              id="e-money"
              type="radio"
              value=""
              name="e-money"
              className={
                "w-6 h-6 text-primary bg-gray-100 border-gray-300 focus:ring-primary focus:ring-2"
              }
            />
            <label
              htmlFor="e-money"
              className="w-full py-5 ml-2 text-sm font-medium text-gray-900"
            >
              e-Money
            </label>
          </div>
          <div
            className={
              "flex items-center pl-4 border border-gray-200 rounded-lg mb-4 md:w-6/12" +
              " " +
              (payment === "cash" && "border-primary")
            }
            onClick={handlePayment}
          >
            <input
              checked={payment === "cash"}
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
        {payment === "e-money" && (
          <div className="md:flex md:gap-4">
            <ShipInfo
              width={'md:w-6/12'}
              placeholder={"238521993"}
              type={"number"}
              label={"e-Money Number"}
            />
            <ShipInfo
              width={'md:w-6/12'}
              placeholder={"6891"}
              type={"number"}
              label={"e-Money PIN"}
            />
          </div>
        )}
      </div>

      <div className="rounded-2xl bg-white flex flex-col gap-3 py-6 px-6 mt-6 lg:mt-0 lg:w-4/12">
        <h2 className="font-bold uppercase text-lg tracking-[1.3px]">
          summary
        </h2>
        <div className="flex flex-col gap-4 pt-8">
          {products.map((element) => {
            const item = element.item;
            return (
              <div
                key={item.id + "-" + item.name}
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
                    <p>x {element.quantity}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between items-center">
            <h3 className="uppercase font-medium opacity-40 text-sm">total</h3>
            <p className="font-bold text-lg">
              €{" "}
              {handleCartTotal()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="uppercase font-medium opacity-40 text-sm">
              shipping
            </h3>
            <p className="font-bold text-lg">€ 50</p>
          </div>
          <div className="flex justify-between items-center">
            <h3 className="uppercase font-medium opacity-40 text-sm">
              vat (included)
            </h3>
            <p className="font-bold text-lg">
              €{" "}
              {(handleCartTotal() * 0.22).toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h3 className="uppercase font-medium opacity-40 text-sm">
            grand total
          </h3>
          <p className="font-bold text-lg text-primary">
            €{" "}
            {(handleCartTotal() + 50)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
        </div>
        <ButtonAction name={'continue & pay'} action={() => {setModalOpen(true)}} bgColor={'bg-primary'} textColor={'text-white'} width={'w-full'} />
      </div>
      </div>
      {modal && <PaymentModal />}
    </div>
    : <div className="grid place-items-center min-h-[70dvh] ">
        <div className="text-center">
        <p className="py-6 font-bold">It&apos;s empty here.</p>
        <Button name={'back home'} href={'/'} bgColor={'bg-primary'} textColor={'text-white'} />
        </div>
       
    </div>
  )
}
