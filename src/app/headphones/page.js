import Product from "../components/homepage/product";
import SingleProduct from "../components/products-show/SingleProduct";
import { sortByProperty } from "../components/utils/functions";
import data from '/public/assets/data/data.json'

export default function Home()
{
    const headphones = data.filter(element => {
       if( element.category === 'headphones') return true
    });
   sortByProperty(headphones, 'id')
    
    return (
        <>
        <div className="bg-dark-primary text-white text-center py-6">
            <h1 className="uppercase font-bold text-[28px] tracking-[2px]">headphones</h1>
        </div>
        <div  className="max-w-[689px] lg:max-w-[1110px] mx-auto">
        {
            headphones.map(element => {return <SingleProduct key={element.name} item={element} />})
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