import { default as React, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
// import "./NavBar.css";
const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          className="navlink"
          to="/"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "transparent",
                  color: "#fff",
                }
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          to="/listedBooks"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "transparent",
                  color: "#fff",
                }
          }
          className="mx-1"
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          className="navlink"
          to="/dashboard"
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "#fff",
                  textDecoration: "underline",
                  backgroundColor: "transparent",
                }
              : {
                  fontWeight: "400",
                  backgroundColor: "transparent",
                  color: "#fff",
                }
          }
        >
          Page to Read
        </NavLink>
      </li>
    </>
  );

  const [showNav, setShowNav] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }

    setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll); // For mobile or negative scrolling
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`navbar  fixed top-0  max-w-6xl px-4 mt-1 md:px-10 mx-auto z-[1000]  ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#23BE0A]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content text-[#23BE0A] border-1 solid border-[#23BE0A] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn-ghost hover:bg-transparent text-xl font-semibold"
        >
          Book<span className="text-[#23BE0A]">Haven</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/singIn"
          className="p-1 cursor-pointer rounded-full ml-2 text-base border-2 solid "
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "black",
                  background: "#fff",
                }
              : {
                  fontWeight: "600",
                  color: "black",
                  background: "#fff",
                }
          }
        >
          <div className="">
            <span className=" absolute top-2 text-xs badge badge-secondary">
              1
            </span>
            <div className="text-xl">
              <IoMdCart />
            </div>
          </div>
        </NavLink>
        <NavLink
          to="/singUp"
          className="p-1 cursor-pointer rounded-full ml-2 text-base border-2 solid "
          style={({ isActive }) =>
            isActive
              ? {
                  fontWeight: "600",
                  color: "black",
                  background: "#fff",
                }
              : {
                  fontWeight: "600",
                  color: "black",
                  background: "#fff",
                }
          }
        >
          <div className="">
            <span className=" absolute top-2 text-xs badge badge-secondary">
              1
            </span>
            <div className="text-xl">
              <FaRegHeart />
            </div>
          </div>
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
