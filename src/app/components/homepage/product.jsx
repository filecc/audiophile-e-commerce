import Image from "next/image";
import Link from "next/link";
import headphones from '/public/assets/shared/desktop/image-category-thumbnail-headphones.png'
import earphones from '/public/assets/shared/desktop/image-category-thumbnail-earphones.png'
import speakers from '/public/assets/shared/desktop/image-category-thumbnail-speakers.png'

export default function Product({ title, href }) {
    return (
        <div className="flex flex-col items-center py-12 md:w-4/12 md:px-2 md:max-w-[350px]">
            <div className="bg-mute rounded-lg pb-6 pt-8 flex flex-col items-center gap-4 w-full relative">
            <Image
                className="absolute top-0 -translate-y-1/2 object-contain"
                src={`/assets/shared/desktop/image-category-thumbnail-${title}.png`}
                // width={120}
                // height={150}
                fill={true}
                alt="arrow right - go to shop"
            />
             
                <h2 className="uppercase font-bold text-sm tracking-[1px] mt-8">{title}</h2>
                <div className="cursor-pointer">
                    <Link className="text-xs uppercase font-bold opacity-40 tracking-[1px] cursor-pointer" href={href}>shop
                    </Link>
                    <Image
                        className="inline-block ms-2 cursor-pointer" 
                        src={'/assets/shared/desktop/icon-arrow-right.svg'}
                        width={8}
                        height={10}
                        alt="arrow - go to shop"
                    />
                </div>

            </div>
        </div>
    )
}

{/* <Image
    className="absolute top-0 -translate-y-1/2 object-contain"
    src={title === 'headphones' ? headphones : (title === 'earphones' ? earphones : speakers)}
    alt="arrow - go to shop"
/> */}