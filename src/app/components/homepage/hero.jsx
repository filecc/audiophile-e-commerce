import Image from "next/image";
import styles from '../../homepage.module.css'
import Link from "next/link";
import Button from "../utils/button";

export default function Hero() {
    return (
        <div className="bg-dark-primary">

            <div className={"px-4 max-w-[1100px] min-h-[550px] mx-auto text-white flex justify-center lg:justify-start items-center " + styles.hero}>
                <div className="w-10/12 md:w-8/12 lg:w-5/12 flex flex-col gap-6 justify-center lg:justify-start items-center lg:items-start text-center lg:text-start">
                    <small className="uppercase tracking-[10px] text-mute opacity-70 text-sm">
                        new product
                    </small>
                    <h1 className="uppercase  text-4xl md:text-6xl font-bold tracking-[2px]">xx99 mark ii headphones</h1>
                    <p className="text-mute opacity-80 font-medium leading-6 text-[15px] px-2 md:px-0">
                    Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <div className="text-center md:text-start">
                    <Button 
                    name={'see product'}
                    href={'/headphones'}
                    bgColor={'bg-primary'}
                    />
                    </div>
                </div>
            </div>
        </div>


    )
}