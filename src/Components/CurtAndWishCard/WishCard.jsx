import { MdDeleteForever } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { addToStoredCurtList, removeFromWishList } from "../../Utility/Utility";

export default function WishCard({ product }) {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate(`/dashboard`);
  };

  const handleAddToAddCurt = (id) => {
    addToStoredCurtList(id);
  };
  const handleRemoveProduct = (id) => {
    removeFromWishList(id);
  };

  return (
    <div>
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

          <div className="flex justify-start items-center flex-grow-0 my-2 gap-6 overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => {
                handleAddToAddCurt(product.product_id);
                handleRefresh();
              }}
              className="btn  text-white  rounded-full bg-gradient-to-br  from-[#b356ff] via-[#b050ff] to-[#8cd3f6]"
            >
              Add To Curt
            </button>
            <Link Link to="/dashboard">
              <button
                onClick={() => handleRemoveProduct(product.product_id)}
                className="text-3xl  rounded-full p-0 m-0 font-semibold hover:red-500 text-red-500 bg-white"
              >
                <MdDeleteForever />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
