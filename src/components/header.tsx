"use client";
import { useState } from "react";
import Link from "next/link";
import { BiLogoDigitalocean } from "react-icons/bi";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = (
    <>
      <li className="hover:text-blue-950 hover:font-semibold duration-200 cursor-pointer">
        Home
      </li>
      <li className="hover:text-blue-950 hover:font-semibold duration-200 cursor-pointer">
        About
      </li>
      <Link href={"/register"}>
        <li className="text-white bg-blue-950 py-2 px-6 rounded-md cursor-pointer hover:opacity-80 duration-300">
          Get started
        </li>
      </Link>
    </>
  );

  return (
    <nav className="py-4 px-4 border-b border-opacity-30">
      <div className="max-w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-blue-950 flex gap-2 items-center text-3xl">
          <BiLogoDigitalocean />
          <h1>Unionly</h1>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center">{navItems}</ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen((prev) => !prev)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-4 px-6 mt-4 md:hidden"
          >
            {navItems}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
