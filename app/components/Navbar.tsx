"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowRoundBack } from "react-icons/io";
import CategoryBar from "./CategoryBar";
import User from "./User";
import Bottom from "./Bottom";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Sticky Navigation Container */}
      <div className="sticky top-0 z-50 bg-black">
        {/* Top Navbar */}
        <div className="px-4 flex items-center h-12 gap-8">
          {/* Logo */}
          <img src="/pitubee.png" alt="logo" className="h-10" />

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-[600px] h-10 border border-[#212121] rounded-full overflow-hidden">
            <input
              type="search"
              className="flex-1 px-4 bg-[#121212] text-sm outline-none"
              placeholder="Search"
            />
            <button className="w-14 flex items-center justify-center bg-[#212121]">
              <FiSearch size={20} />
            </button>
            <User />
          </div>

          {/* Mobile Search Button */}
          <div className="md:hidden">
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center bg-[#212121] rounded-full sticky left-0"
              onClick={() => setSearchOpen(true)}
            >
              <FiSearch size={20} />
            </button>
            <Bottom />
          </div>
          {/* User */}
        </div>

        {/* Category Bar (disabled when search is open) */}
        <CategoryBar disabled={searchOpen} />
      </div>

      {/* Search Overlay (mobile only) */}
      {searchOpen && (
        <div className="fixed top-0 left-0 z-[60] w-full h-12 bg-black px-4 flex items-center gap-3 md:hidden">
          <button
            onClick={() => setSearchOpen(false)}
            className="w-10 h-10 flex items-center justify-center"
          >
            <IoMdArrowRoundBack size={22} />
          </button>

          <input
            autoFocus
            type="search"
            className="flex-1 h-10 px-4 bg-[#121212] border border-[#212121] rounded-full outline-none"
            placeholder="Search"
          />

          <button className="w-10 h-10 flex items-center justify-center">
            <FiSearch size={20} />
          </button>
        </div>
      )}
    </>
  );
}
