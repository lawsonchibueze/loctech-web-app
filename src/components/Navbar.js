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
import Modal from "./Modal";
import { MdOutlineClose } from "react-icons/md";
import DarkMode from "./DarkMode/DarkMode";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const openModal = () => setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <nav className=" dark:bg-gray-700 bg-white sticky top-0 z-20 w-full sm:flex  justify-center items-center sm:py-5">
      {showModal && (
        <Modal isClose={closeModal}>
          <div className="px-5  w-full flex justify-center flex-col items-center space-y-14 sm:space-y-60">
            <input
              placeholder="Hit enter to search..."
              className=" w-full sm:px-5 bg-transparent outline-none border-b-4 text-white border-gray-600 text-2xl sm:text-6xl placeholder-gray-400"
            />

            <div>
              <MdOutlineClose
                className=" text-5xl sm:text-7xl text-white  font-medium cursor-pointer"
                onClick={closeModal}
              />
            </div>
          </div>
        </Modal>
      )}

      <div className="max-w-full w-full  md:px-6  ">
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
              <TbCategory className="text-2xl mx-4 " />
              <p className="text-black dark:text-white">Category</p>
            </div>

            <div className="hidden  md:ml-6 md:flex items-center">
              <div className="flex space-x-4">
                <div className="relative flex   sm:flex items-center">
                  <button
                    type="submit"
                    className="dark:text-white text-xl absolute top-0 right-0 h-full px-2 text-gray-500 dark:hover:text-[#FF2883]  hover:text-[#FF2883] cursor-pointer"
                    onClick={openModal}
                  >
                    <HiOutlineSearch />
                  </button>
                </div>

                <div className="flex items-center space-x-5">
                  <DarkMode />
                </div>
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
            <div className="relative   sm:flex items-center">
              <button
                type="submit"
                className=" px-2 text-gray-500 hover:text-blue-500 cursor-pointer"
                onClick={openModal}
              >
                <HiOutlineSearch />
              </button>
            </div>
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
