"use client";
import { useState } from "react";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-gray-800 text-white p-5
          transition-transform transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }
          md:translate-x-0 md:w-60
        `}
      >
        <h2 className="text-2xl font-bold mb-8">Menu</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link href="/" className="block hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cars" className="block hover:text-gray-400">
                Cars
              </Link>
            </li>
            <li>
              <Link href="/contact" className="block hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="block hover:text-gray-400">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 md:ml-60">
        {/* Mobile Menu Button */}
        <button
          className="p-3 bg-gray-800 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Close" : "Menu"}
        </button>

       
       
      </div>
    </div>
  );
};

export default Sidebar;
