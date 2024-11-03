// import { useLoaderData } from "react-router-dom";
import React, { useEffect, useState } from "react";
import AllProduct from "./AllProduct/AllProduct";
export default function Products({ data }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("./Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  //   const data = useLoaderData();
  return (
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
      <div className="flex flex-col gap-4 sticky top-10 h-fit">
        <button className="btn btn-outline text-xs md:text-base btn-info">
          All Products
        </button>
        {categories.map((c) => (
          <button
            className="btn btn-outline text-xs md:text-base btn-info"
            key={c.category_id}
          >
            {c.category_name}
          </button>
        ))}
      </div>
      <div className="col-span-2 h-fit  md:col-span-4 lg:col-span-6  ">
        <AllProduct data={data}></AllProduct>
      </div>
    </div>
  );
}
// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
