import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCurtList, getStoredWishList } from "../../Utility/Utility";
import CurtAndWishCard from "../CurtAndWishcard/CurtAndWishcard";
export default function Dashboard() {
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredCurtList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.product_id)
    );

    setReadList(readBookList);

    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.product_id)
    );

    setWishList(wishBookList);
  }, []);
  return (
    <div className="max-w-6xl bg-green-300 mx-auto">
      <Helmet>
        <title>Dashboard | Gadget Pookie</title>
        <meta name="description" content="Dashboard" />
      </Helmet>

      <div className="flex w-full">
        <Tabs className="flex flex-col w-full">
          <TabList className="flex w-full gap-4 justify-end  ring-0 p-4 bg-gray-100 border-r-2 border-gray-300">
            {/* Left-side tabs as buttons */}
            <Tab className="p-2 btn bg-gray-200 border-2 border-gray-300 rounded-md cursor-pointer mb-2 text-center hover:bg-gray-300 focus:outline-none">
              Curt List
            </Tab>
            <Tab className="p-2 btn bg-gray-200 border-2 border-gray-300 rounded-md cursor-pointer mb-2 text-center hover:bg-gray-300 focus:outline-none">
              Wish List
            </Tab>
          </TabList>

          <TabPanel className="flex flex-col  p-4 bg-gray-50">
            {readList.map((p) => (
              <CurtAndWishCard key={p.product_id} product={p}></CurtAndWishCard>
            ))}
          </TabPanel>
          <TabPanel className="flex flex-col p-4  bg-gray-50">
            {wishList.map((p) => (
              <CurtAndWishCard key={p.product_id} product={p}></CurtAndWishCard>
            ))}
          </TabPanel>
        </Tabs>
      </div>

      {/* {readList.map((p) => (
        <ProductCard key={p.product_id} product={p}></ProductCard>
      ))} */}
    </div>
  );
}
