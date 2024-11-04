import { default as React } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { GiBowTieRibbon } from "react-icons/gi";
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

  return (
    <nav
      className={`navbar  max-w-6xl px-4 mt-[.2rem] md:px-10 mx-auto z-[1000]  `}
    >
      <div className="navbar-start">
        <div className="dropdown ml-4">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-pink-400"
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
            className="menu menu-sm dropdown-content bg-pink-400 bg-opacity-70 backdrop-blur-sm  border-1 solid border-pink-400 rounded-box z-[1] mt-0 w-40 ml-4 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn-ghost hover:bg-transparent text-xl font-bold text-pink-400"
        >
          <span className="text-[1.65rem]">G</span>adget
          <span className="text-[#68cdff]  font-semibold text-xl relative">
            Pookie
          </span>
          <span className="absolute top-[1.2rem]  text-base rotate-45">
            <GiBowTieRibbon />
          </span>
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
          <div className="relative">
            <span className=" absolute translate-x-2 -top-[1.1rem] text-xs badge ">
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
          <div className="relative">
            <span className=" absolute translate-x-2  -top-[1.1rem] text-xs badge badge-secondary">
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
