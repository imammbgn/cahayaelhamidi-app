import { CardProduct } from "./cardProduct";
import data from "/productData.json";

const Product = ({ scroll }) => {
  return (
    <div ref={scroll} className="lg:max-w-[1112px] mx-auto my-10 mt-28 mb-16">
      <h1 className="text-xl mb-8">Product List</h1>
      <div className="h-full w-full flex flex-wrap justify-between">
        {data.map((product, index) => (
          <CardProduct key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
