// import { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredCurtList,
  addToStoredWishList,
} from "../../Utility/Utility";

export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  // const [product, setProduct] = useState({});
  const product = data.find((e) => e.product_id === parseInt(id));
  // useEffect(() => {
  //   const filteredProduct = data.find((e) => e.product_id === parseInt(id));
  //   console.log(filteredProduct);
  //   setProduct(filteredProduct);
  // }, [data, id]);

  const handleAddToAddCurt = (id) => {
    addToStoredCurtList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div>
      <nav className="h-56  bg-gradient-to-b from-[#64109c] via-[#d084fe] to-[#a8e2ff] pt-6">
        <h1 className="text-2xl text-center mx-auto font-bold text-white w-[90%]  lg:w-[70%] mx auto">
          Product Details
        </h1>
        <p className="w-[90%] text-center mx-auto text-xs md:text-sm text-gray-200  lg:w-[50%] mx auto">
          All type of information available here, you can see details if this
          product, so you can bay easily according to your requirements.
        </p>
      </nav>

      <div className="w-[90%] md:w-[70%] bg-white flex -mt-24 gap-4 lg:w-[55%] border-2 mb-12 solid border-gray-200 rounded-xl p-4 max-w-7xl  mx-auto">
        <div className="w-[35%] rounded-xl border-2 solid border-gray-100">
          <img
            className="w-full h-full rounded-xl object-cover"
            src={product.product_image}
            alt=""
          />
        </div>
        <div className=" space-y-2">
          <h1 className="text-xl font-semibold">{product.product_title}</h1>
          <p className="text-sm text-gray-700">Price: ${product.price}</p>

          {product.availability ? (
            <button className="btn btn-xs rounded-full border border-green-500 solid bg-green-50 text-green-500">
              In stoke
            </button>
          ) : (
            <button className="btn btn-xs rounded-full border border-red-400 solid bg-red-50 text-red-400">
              Out of stock
            </button>
          )}
          <p className="text-sm text-gray-700">
            Description: {product.description}
          </p>
          <p className="text-sm text-black font-semibold">Specification</p>
          <ol className="-mt-2 space-y-1">
            {product.specification.map((p) => (
              <li className="text-xs ml-6  text-gray-500 list-decimal">{p}</li>
            ))}
          </ol>
          <p className="text-sm text-black font-semibold">Ratting</p>
          <div className="flex gap-4 justify-start items-center">
            <button
              onClick={() => handleAddToAddCurt(id)}
              disabled={!product.availability}
              className="btn text-white bg-gradient-to-r from-[#9538E2] via-{#e0aeff} to-[#68cdff] "
            >
              Secondary
            </button>
            <button
              onClick={() => handleAddToWishList(id)}
              className="btn btn-secondary"
            >
              <FaRegHeart></FaRegHeart>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
