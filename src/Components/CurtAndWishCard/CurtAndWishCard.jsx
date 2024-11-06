import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
export default function CurtAndWishCard({ product }) {
  return (
    <div className="mb-4 mt-6 flex flex-col md:flex-row border solid border-gray-400 rounded-xl p-4">
      <img
        className="w-[100%] h-60  md:w-[20%]  rounded-xl"
        src={product.product_image}
        alt=""
      />
      <div className="md:pl-12 flex flex-col px-6 md:px-0 my-2 w-full">
        <h2 className="text-2xl font-bold">{product.product_title}</h2>
        <h2 className="my-3">Price: {product.price}</h2>
        <h2 className="my-3">Price: {product.description}</h2>
        <h2 className="my-3">Price: {product.rating}</h2>

        <div className="flex justify-start flex-grow-0 my-2 gap-6 overflow-x-auto whitespace-nowrap">
          <Link Link to="/dashboard">
            <button className="text-3xl  rounded-full p-0 m-0 font-semibold hover:red-500 text-red-500 bg-white">
              <MdDeleteForever />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
