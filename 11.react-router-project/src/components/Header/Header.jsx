import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky shadow-lg top-0 z-50">
      {/* Nav */}
      <nav className="bg-white border-gray-200 px-4 py-2.5 lg:px-6">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="h-12"
            />
          </Link>
          {/* Login and signupBTn */}
          <div className="flex flex-wrap gap-x-4 lg:order-2">
            {/* Login */}
            <Link
              to="#"
              className="text-gray-800 font-medium text-md rounded-sm hover:bg-gray-100 px-3  py-2"
            >
              Log in
            </Link>
            {/* Signup */}
            <Link
              to="#"
              className="text-white font-medium text-md rounded-sm bg-gray-700 px-3  py-2"
            >
              Sign Up
            </Link>
          </div>
          {/* Ul Links */}
          <ul className="hidden lg:flex lg:order-1 items-center gap-x-4 text-xl font-medium text-gray-800">
            <li>
              <NavLink
              to='/'
                className={({isActive})=> `${isActive ? 'text-red-400' : 'text-black'}`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to='about'
              className={({isActive})=> `${isActive ? 'text-red-400' : 'text-black'}`}
                
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
              to='contact'
              className={({isActive})=> `${isActive ? 'text-red-400' : 'text-black'}`}
                
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
