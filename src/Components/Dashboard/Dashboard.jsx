import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredCurtList, getStoredWishList } from "../../Utility/Utility";
import CurtAndWishCard from "../CurtAndWishCard/CurtAndWishCard";
import WishCard from "../CurtAndWishCard/WishCard";
export default function Dashboard() {
  const [curtList, setCurtList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [sort, setSort] = useState("");

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedCurtList = getStoredCurtList();
    const storedCurtListInt = storedCurtList.map((id) => parseInt(id));

    const readBookList = allBooks.filter((book) =>
      storedCurtListInt.includes(book.product_id)
    );

    setCurtList(readBookList);

    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));

    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.product_id)
    );

    setWishList(wishBookList);
  }, []);

  const [tabIndex, setTabIndex] = useState(0);

  const handleTabSelect = (index) => {
    setTabIndex(index);
  };

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Low-High, Ascending order") {
      const sortedCurtList = [...curtList].sort((a, b) => a.price - b.price);
      setCurtList(sortedCurtList);
    }

    if (sortType === "High-Low, Descending order") {
      const sortedCurtList = [...curtList].sort((a, b) => b.price - a.price);
      setCurtList(sortedCurtList);
    }
  };

  // const totalPrices = curtList.map((p) => setTotalPrice(totalPrice + p.price));

  // const totalPrices = curtList.reduce((total, p) => total + p.price, 0);
  // setTotalPrice(totalPrices);

  useEffect(() => {
    const totalPrices = curtList.reduce((total, p) => total + p.price, 0);
    setTotalPrice(totalPrices); // Update the total price state
  }, [curtList]);

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  //   const handlePurchase = () => {
  //     clearLocalStorage();
  //   };
  // };

  const handlePurchase = () => {
    const storedListStr = JSON.stringify([]);
    localStorage.setItem("curt-list", storedListStr);
  };

  return (
    <div className=" ">
      <Helmet>
        <title>Dashboard | Gadget Pookie</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <nav className="h-56  bg-gradient-to-b  from-[#64109c] via-[#d084fe] to-[#70cfff] pt-6">
        <h1 className="text-2xl text-center mx-auto font-bold text-white w-[90%]  lg:w-[70%] mx auto">
          Product Details
        </h1>
        <p className="w-[90%] text-center mx-auto text-xs md:text-sm text-gray-200  lg:w-[50%] mx auto">
          All type of information available here, you can see details if this
          product, so you can bay easily according to your requirements.
        </p>
      </nav>
      <div className="flex  -mt-28 bg-transparent max-w-6xl mx-auto">
        <Tabs
          onSelect={handleTabSelect}
          className="flex flex-col w-full bg-transparent"
        >
          <TabList className="flex w-[101%] gap-4  justify-center  ring-0 p-4 bg-transparent  ">
            {/* Left-side tabs as buttons */}
            <Tab
              className={`px-6 py-1 btn  rounded-full  border cursor-pointer mb-2 text-center focus:outline-none ${
                tabIndex === 0
                  ? " bg-white text-[#a73cff]"
                  : "bg-transparent text-white"
              }`}
            >
              Curt List
            </Tab>
            <Tab
              className={`px-6 py-1 btn  rounded-full  border cursor-pointer mb-2 text-center focus:outline-none ${
                tabIndex === 1
                  ? " bg-white text-[#a73cff]"
                  : "bg-transparent text-white"
              }`}
            >
              Wish List
            </Tab>
          </TabList>

          <TabPanel className="flex flex-col  p-4 bg-transparent">
            <div className="flex flex-col md:flex-row gap-3  justify-between md:items-center mt-4">
              <h1 className="text-lg w-fit text-gray-500 font-semibold border-2 rounded-full px-4 py-[.6rem] solid border-gray-200">
                <span className="font-bold text-xl text-[#a73cff]">
                  Total Price:
                </span>
                {" $"} {totalPrice.toFixed(2)}
              </h1>
              <div className="flex items-center gap-6">
                <div className="dropdown   rounded-xl">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn text-[#9538E2] hover:bg-[#e6c9fd86] hover:border-2 border rounded-full px-6 border-[#9538E2] hover:border-[#a231ff] solid bg-transparent m-1"
                  >
                    {sort ? `Sort by: ${sort}` : "Sort by"}
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu  bg-white rounded-box z-[1] w-44 p-2 shadow"
                  >
                    <li
                      className=" bg-white hover:bg-white hover:border-[#9538E2] border-2 solid border-[#9538E2] mb-2 rounded-lg"
                      onClick={() => handleSort("Low-High, Ascending order")}
                    >
                      <a>Low-High, Ascending order</a>
                    </li>
                    <li
                      className=" bg-white hover:bg-white hover:border-[#9538E2] border-2 solid border-[#9538E2] rounded-lg"
                      onClick={() => handleSort("High-Low, Descending order")}
                    >
                      <a>High-Low, Descending order</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <button
                    onClick={() => {
                      goToHome();
                      handlePurchase();
                    }}
                    className="btn  text-white  rounded-full bg-gradient-to-br  from-[#b356ff] via-[#b050ff] to-[#8cd3f6]"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </div>
            {curtList.map((p) => (
              <CurtAndWishCard key={p.product_id} product={p}></CurtAndWishCard>
            ))}
          </TabPanel>
          <TabPanel className="flex flex-col p-4  bg-transparent">
            {wishList.map((p) => (
              <WishCard key={p.product_id} product={p}></WishCard>
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

// import React, { useState, useEffect } from 'react';

// const ShoppingCart = () => {
//   const [curtList, setCurtList] = useState([
//     { price: 10 },
//     { price: 20 },
//     { price: 30 }
//   ]);
//   const [tP, setTP] = useState(0); // Total price state

//   // Update total price whenever curtList changes
//   useEffect(() => {
//     const totalPrice = curtList.reduce((total, p) => total + p.price, 0);
//     setTP(totalPrice);
//   }, [curtList]); // Dependency array ensures it runs only when curtList changes

//   // Example of adding an item to the cart
//   const addItemToCart = (item) => {
//     setCurtList((prevList) => [...prevList, item]); // Add new item to cart
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div>Total Price: ${tP}</div>
//       <button onClick={() => addItemToCart({ price: 15 })}>Add $15 Item</button>
//       <button onClick={() => addItemToCart({ price: 25 })}>Add $25 Item</button>
//     </div>
//   );
// };

// export default ShoppingCart;

// import React, { useState, useEffect } from 'react';

// const ShoppingCart = () => {
//   const [curtList, setCurtList] = useState([
//     { price: 10 },
//     { price: 20 },
//     { price: 30 }
//   ]);
//   const [tP, setTP] = useState(0); // Total price state

//   // useEffect will only run when curtList changes
//   useEffect(() => {
//     const totalPrice = curtList.reduce((total, p) => total + p.price, 0);
//     setTP(totalPrice);  // Update the total price state
//   }, [curtList]);  // Dependency array ensures this runs only when curtList changes

//   // Function to add item to cart and update curtList
//   const addItemToCart = (item) => {
//     setCurtList((prevList) => [...prevList, item]); // Update the cart list
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <div>Total Price: ${tP}</div>
//       <button onClick={() => addItemToCart({ price: 15 })}>Add $15 Item</button>
//       <button onClick={() => addItemToCart({ price: 25 })}>Add $25 Item</button>
//     </div>
//   );
// };

// export default ShoppingCart;
