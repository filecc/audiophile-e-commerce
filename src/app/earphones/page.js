import Product from "../components/homepage/product";
import SingleProduct from "../components/products-show/SingleProduct";
import { sortByProperty } from "../components/utils/functions";
import data from '/public/assets/data/data.json'

export default function Page()
{
    const earphones = data.filter(element => {
       if( element.category === 'earphones') return true
    });
   sortByProperty(earphones, 'id')
    
    return (
        <>
        <div className="bg-dark-primary text-white text-center py-6">
            <h1 className="uppercase font-bold text-[28px] tracking-[2px]">earphones</h1>
        </div>
        <div className="max-w-[689px] lg:max-w-[1110px] mx-auto">
        {
            earphones.map(element => {return <SingleProduct key={element.name} item={element} />})
        }
        </div>
       
        
       <section className='px-4 py-16 md:flex justify-between max-w-[689px] lg:max-w-[1110px] mx-auto'>
            <Product title={'headphones'} href={'/headphones'} />
            <Product title={'speakers'} href={'/speakers'} />
            <Product title={'earphones'} href={'/earphones'} />
        </section>
        </>
    )
}