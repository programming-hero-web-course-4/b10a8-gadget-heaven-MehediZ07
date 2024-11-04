import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
export default function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const filteredProduct = data.find((e) => e.product_id === parseInt(id));
    console.log(filteredProduct);
    setProduct(filteredProduct);
  }, [data, id]);

  return (
    <div className="w-[90%] md:[w-70%]">
      <div>
        <img src={product.product_image} alt="" />
      </div>
      <div>
        <p>{product.product_title}</p>
        <p>gfdshjk</p>
        <p>hgfrjsdl;</p>
      </div>
    </div>
  );
}
