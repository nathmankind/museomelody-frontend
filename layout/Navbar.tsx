"use client";

import { useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import { token_name } from "@/utils/Provider/constants";
import { redirect, useRouter } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isAuthenticated = Cookies.get(token_name);

  const handleLogout = () => {
    Cookies.remove(token_name);
    router.push("/");
    window.location.reload();
  };
  return (
    <nav className="bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">MUSEOMELODY</a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`space-x-4 md:flex ${
            menuOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <Link href="/" className="hover:text-gray-300 block md:inline">
            Home
          </Link>
          {/* <Link
            href="/exhibitions"
            className="hover:text-gray-300 block md:inline"
          >
            Exhibitions
          </Link> */}
          <Link href="/events" className="hover:text-gray-300 block md:inline">
            Events & Exhibitions
          </Link>
          <Link href="/pricing" className="hover:text-gray-300 block md:inline">
            Pricing
          </Link>
        </div>

        {/* Become a Member Button (visible only on larger screens) */}
        <div className="hidden md:flex space-x-4">
          {isAuthenticated ? (
            <>
              {/* <Link
                href="/membership"
                className="bg-white hover:bg-gray-600 text-purple-900 font-bold py-2 px-4 rounded"
              >
                Become a Member
              </Link> */}
              <div
                onClick={handleLogout}
                className="bg-white text-purple-900 font-bold py-2 px-4 rounded hover:bg-gray-200"
              >
                Log out
              </div>
            </>
          ) : (
            <>
              <Link
                href="/signin"
                className="bg-white text-purple-900 font-bold py-2 px-4 rounded hover:bg-gray-200"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="bg-white text-purple-900 font-bold py-2 px-4 rounded hover:bg-gray-200"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-gray-800 text-white p-4`}
      >
        <Link href="/" className="block py-2">
          Home
        </Link>
        <Link href="/exhibitions" className="block py-2">
          Exhibitions
        </Link>
        <Link href="/events" className="block py-2">
          Events
        </Link>
        <Link href="/pricing" className="block py-2">
          Pricing
        </Link>
      </div>
    </nav>
    // <nav className="bg-gray-900 text-white">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
    //     <div className="text-2xl font-bold">MUSEOMELODY</div>

    //     {/* Hamburger Menu for Mobile */}
    //     <div className="md:hidden">
    //       <button
    //         onClick={() => setMenuOpen(!menuOpen)}
    //         className="focus:outline-none"
    //       >
    //         <svg
    //           className="w-6 h-6"
    //           fill="none"
    //           stroke="currentColor"
    //           viewBox="0 0 24 24"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d={
    //               menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
    //             }
    //           ></path>
    //         </svg>
    //       </button>
    //     </div>

    //     {/* Menu Links */}
    //     <div
    //       className={`space-x-4 md:flex ${
    //         menuOpen ? "block" : "hidden"
    //       } transition-all duration-300`}
    //     >
    //       <Link href="/" className="hover:text-gray-300 block md:inline">
    //         Home
    //       </Link>
    //       <Link
    //         href="/exhibitions"
    //         className="hover:text-gray-300 block md:inline"
    //       >
    //         Exhibitions
    //       </Link>
    //       <Link href="/events" className="hover:text-gray-300 block md:inline">
    //         Events
    //       </Link>
    //       <Link href="/pricing" className="hover:text-gray-300 block md:inline">
    //         Pricing
    //       </Link>
    //       <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded hidden md:inline-block">
    //         Become a member
    //       </button>
    //     </div>
    //   </div>

    //   {/* Mobile Menu */}
    //   <div
    //     className={`md:hidden ${
    //       menuOpen ? "block" : "hidden"
    //     } bg-gray-800 text-white p-4`}
    //   >
    //     <Link href="/" className="block py-2">
    //       Home
    //     </Link>
    //     <Link href="/exhibitions" className="block py-2">
    //       Exhibitions
    //     </Link>
    //     <Link href="/events" className="block py-2">
    //       Events
    //     </Link>
    //     <Link href="/pricing" className="block py-2">
    //       Pricing
    //     </Link>
    //   </div>
    // </nav>
  );
};

export default Navbar;
