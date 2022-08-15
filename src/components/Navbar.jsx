import React from "react";
import { FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "./assets/Logo";
const Navbar = () => {
  return (
    <div class="navbar bg-base-100">
      <div class="flex-1">
        <div class="text-primary normal-case text-2xl hover:primary-focus p-2   flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center justify-between p-2 hover:bg-primary-content transition duration-900 ease-in-out rounded-lg"
          >
            <Logo height={100} width={150} className="" />
          </Link>
        </div>
      </div>

      <ul class="menu menu-horizontal p-3  flex justify-between w-1/6">
        <li className="hover:text-primary-content">
          <Link to="/">Home</Link>
        </li>

        <li className="hover:text-primary-content">
          <Link to="/musicSearch">Search</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
