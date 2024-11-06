import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStoredCurtList = () => {
  const storedListStr = localStorage.getItem("curt-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoredCurtList = (id) => {
  const storedList = getStoredCurtList();
  storedList.push(id);
  const storedListStr = JSON.stringify(storedList);
  localStorage.setItem("curt-list", storedListStr);

  toast("✅ Product added to your curt.");
};

const removeFromCurtList = (id) => {
  const storedList = getStoredCurtList();
  const index = storedList.indexOf(String(id));

  if (index !== -1) {
    storedList.splice(index, 1);
    console.log("Updated list after removal:", storedList);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("curt-list", storedListStr);
    toast("❌ This Product is remove to your Curt list.");
  }
};

const getStoredWishList = () => {
  const storedWishListStr = localStorage.getItem("wish-list");
  if (storedWishListStr) {
    const storedWishList = JSON.parse(storedWishListStr);
    return storedWishList;
  } else {
    return [];
  }
};

const addToStoredWishList = (id) => {
  const storedWishList = getStoredWishList();
  if (storedWishList.includes(id)) {
    console.log(id, "already exists in the read list");
  } else {
    storedWishList.push(id);
    const storedWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem("wish-list", storedWishListStr);
    toast("❤️ Product Added to your wish list.");
  }
};

const removeFromWishList = (id) => {
  const storedList = getStoredWishList();
  const index = storedList.indexOf(String(id));

  if (index !== -1) {
    storedList.splice(index, 1);
    console.log("Updated list after removal:", storedList);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    toast("❌ This Product is remove to your wish list.");
  }
};

export {
  addToStoredCurtList,
  addToStoredWishList,
  getStoredCurtList,
  getStoredWishList,
  removeFromCurtList,
  removeFromWishList,
};
