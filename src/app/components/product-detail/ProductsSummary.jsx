import Product from "../homepage/product";

export default function ProductsSummary()
{
    return (
        <section className='px-4 py-16 md:flex justify-between max-w-[689px] lg:max-w-[1110px] mx-auto'>
            <Product title={'headphones'} href={'/headphones'} />
            <Product title={'speakers'} href={'/speakers'} />
            <Product title={'earphones'} href={'/earphones'} />
        </section>
    )
}