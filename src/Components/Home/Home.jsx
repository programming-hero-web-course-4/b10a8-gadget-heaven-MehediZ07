import React from "react";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import HomeBanner from "./HomeBanner/HomeBanner";
export default function Home() {
  const categories = useLoaderData();

  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   fetch("./Categories.json")
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }, []);

  return (
    <div className="mt-12 -mx-5 ">
      <HomeBanner></HomeBanner>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 ">
        <div className="flex flex-col gap-4 sticky top-10 h-fit shadow-lg px-2 pb-2 rounded-lg">
          <NavLink
            to="/"
            className="btn btn-outline text-xs rounded-full border-2 md:text-base  btn-info"
            style={({ isActive }) =>
              isActive
                ? {
                    fontWeight: "600",
                    color: "white",
                    background: "linear-gradient(to right, #9538E2, #8cd2f6)",
                  }
                : { fontWeight: "600", background: "white", color: "#68cdff" }
            }
          >
            All Products
          </NavLink>
          {categories.map((c) => (
            <NavLink
              className="btn btn-outline text-xs rounded-full  border-2 md:text-base btn-info"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "600",
                      color: "white",
                      background: "linear-gradient(to right, #9538E2, #8cd2f6)",
                    }
                  : { fontWeight: "600", background: "white", color: "#68cdff" }
              }
              key={c.category_id}
              to={`/Product/${c.category_name}`}
            >
              {c.category_name}
            </NavLink>
          ))}
        </div>

        <div className="col-span-2 h-fit  md:col-span-4 lg:col-span-6  ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}
