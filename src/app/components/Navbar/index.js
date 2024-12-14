"use client";
import { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle clicks outside the sidebar
  const handleOutsideClick = (e) => {
    if (!e.target.closest("#sidebar") && isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="relative" onClick={handleOutsideClick}>
      {/* Navbar */}
      <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Sidebar Toggle Button */}
          <button
            className="text-white p-2 rounded bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            onClick={(e) => {
              e.stopPropagation(); // Prevent click propagation
              setIsSidebarOpen(!isSidebarOpen);
            }}
            aria-label="Toggle Sidebar"
          >
            {/* Inline SVG for Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold">Cars Showcase</h1>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="#cars" className="hover:underline">Cars</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          id="sidebar"
          className="fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-6 shadow-lg z-50"
        >
          <h2 className="text-xl font-bold mb-6">Sidebar Menu</h2>
          <ul className="space-y-4">
            <li><a href="/" className="hover:text-gray-400">Home</a></li>
            <li><a href="#cars" className="hover:text-gray-400">Cars</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      )}

      {/* Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}
    </div>
  );
}
