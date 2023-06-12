import data from "/public/assets/data/data.json";
import ProductDetail from "../../components/product-detail/ProductDetail";

export default function Page({ params }) {
  const product = data.filter((element) => element.slug === params.slug)[0];

  return (
    <div className="p-4 max-w-[689px] lg:max-w-[1110px] mx-auto">
      <ProductDetail product={product} />
    </div>
  );
}
