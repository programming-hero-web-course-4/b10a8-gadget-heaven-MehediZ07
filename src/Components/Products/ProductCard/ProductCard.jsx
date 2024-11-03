import { useLoaderData } from "react-router-dom";
export default function ProductCard({ product }) {
  const data = useLoaderData();
  return (
    <div className="border-2 ml-6 solid border-gray-200 rounded-lg md:p-4 lg:p-6 mb-6">
      <img
        className=" object-cover w-full p-4 mb-4 md:p-0 rounded-lg h-44"
        src={product.product_image}
        alt=""
      />
      <div className="text-start px-4 md:px-0 pb-4 space-y-2 md:pb-0">
        <h1 className=" font-bold">{product.product_title}</h1>
        <p className="text-sm text-gray-700">Price: ${product.price}</p>
        <button className="btn btn-outline btn-info">Details</button>
      </div>
    </div>
  );
}
