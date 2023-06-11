import Image from "next/image";
import Button from "../utils/button";


export default function SingleProduct({item})
{
    
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 px-4 my-10">
            <div className={"relative h-[350px] lg:h-[560px] overflow-hidden rounded w-full lg:w-6/12 " + (item.id % 2 && 'order-2')}>
                <Image className="p-4 rounded md:hidden object-contain" src={item.categoryImage.mobile} alt={item.name} fill={true} />
                <Image className="p-4 rounded hidden md:block lg:hidden object-cover" src={item.categoryImage.tablet} alt={item.name} fill={true} />
                <Image className="p-4 rounded hidden lg:inline-block object-contain" src={item.categoryImage.desktop} alt={item.name} fill={true} />
            </div>
            <div className="flex flex-col items-center lg:items-start justify-center gap-5 px-4 text-center lg:text-start lg:w-6/12">
            {item.new && <small className="uppercase tracking-[10px] text-primary">new product</small>}
            <h2 className="uppercase text-3xl font-bold tracking-[1px]">{item.name}</h2>
            <p className="opacity-40">{item.description}</p>
            <Button name={'see product'} href={'/'+item.category + '/' + item.slug} bgColor={'bg-primary'} textColor={'text-white'} />
            </div>
           
        </div>
    )
}