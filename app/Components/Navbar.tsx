"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Bell, Search, Settings } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 md:ml-4">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={150} height={40} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 flex-grow justify-center">
          <Link
            href="\Homepage"
            className={`text-gray-700 hover:text-blue-600 hover:underline ${
                pathname === "/" || pathname.startsWith("/Homepage") ? "text-blue-800 font-semibold underline" : ""
            }`}
            >
            Home
            </Link>
            <Link
            href="\MyOrder"
            className={`text-gray-700 hover:text-blue-600 hover:underline ${
                pathname === "/" || pathname.startsWith("/MyOrder") ? "text-blue-800 font-semibold underline" : ""
            }`}
            >
            My Order
            </Link>
            <Link
            href="\StockAvailability"
            className={`text-gray-700 hover:text-blue-600 hover:underline ${
                pathname === "/" || pathname.startsWith("/StockAvailability") ? "text-blue-800 font-semibold underline" : ""
            }`}
            >
            Stock Availability</Link>
            <Link
            href="\"
            className={`text-gray-700 hover:text-blue-600 hover:underline ${
                pathname === "/" || pathname.startsWith("/OrderHistory") ? "text-blue-800 font-semibold underline" : ""
            }`}
            >
            Order History</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex space-x-4 items-center">
            <button className="text-gray-700 hover:text-blue-600"><Search size={24} /></button>
            <button className="text-gray-700 hover:text-blue-600"><Bell size={24} /></button>
            <button className="text-gray-700 hover:text-blue-600"><Settings size={24} /></button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link
              href="/"
              className={`block text-gray-700 hover:text-blue-600 ${
                pathname === "/Homepage/page" ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Home
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/services" className="block text-gray-700 hover:text-blue-600">Services</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
