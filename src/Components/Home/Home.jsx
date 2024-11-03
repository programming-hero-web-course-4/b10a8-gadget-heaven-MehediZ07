import { useLoaderData } from "react-router-dom";
import Products from "../Products/Products";
import HomeBanner from "./HomeBanner/HomeBanner";
export default function Home() {
  const data = useLoaderData();

  return (
    <div className="mt-12 -mx-5">
      <HomeBanner></HomeBanner>
      <div>
        <Products data={data}></Products>
      </div>
    </div>
  );
}
