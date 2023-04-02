"use client";
import React from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { RiMenuFoldLine } from "react-icons/ri";
import { useState } from "react";
import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import { TbCategory } from "react-icons/tb";
import NavItem from "./NavItem";
import Image from "next/image";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white sm:flex  justify-center items-center sm:py-5">
      <div className="max-w-full w-full  md:px-6 ">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <RiMenuFoldLine className="h-6 w-6" />
              ) : (
                <BiMenuAltLeft className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center md:px-10 md:items-stretch md:justify-between">
            <div className="flex-shrink-0 ">
              <Link href="/" className="text-white text-xl">
                <Image
                  src="/loctech PNG reg.png"
                  width={120}
                  height={120}
                  alt="logo"
                />
              </Link>
            </div>

            <div className="items-center hidden sm:flex">
              <TbCategory className="text-2xl mx-4 bg-white" />
              <p className="text-black">Category</p>
            </div>

            <div className="relative w-96 hidden sm:flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pr-10 pl-4 border border-gray-400 rounded-lg shadow-md outline-none"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 h-full px-2 text-gray-500 hover:text-blue-500"
              >
                <HiOutlineSearch />
              </button>
            </div>

            <div className="hidden  md:ml-6 md:flex items-center">
              <div className="flex space-x-4">
                <NavItem to="" name="Home" />
                <NavItem to="" name="Courses" />
                <NavItem to="" name="Blog" />
                <NavItem to="" name="Pages" />
                <NavItem to="" name="Features" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="  sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavItem to="" name="Home" />
            <NavItem to="" name="Courses" />
            <NavItem to="" name="Blog" />
            <NavItem to="" name="Pages" />
            <NavItem to="" name="Features" />
          </div>
        </div>
      )}
    </nav>
  );
}
