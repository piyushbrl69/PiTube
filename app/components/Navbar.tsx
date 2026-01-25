"use client";
import { FiSearch } from "react-icons/fi";

import Image from "next/image";
import CategoryBar from "./CategoryBar";
import User from "./User";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between text-center h-12 bg-black">
        <div className=" mr-8 ml-8">
          <img src="/pitubee.png" alt="logo" className="h-[40px] mt-1" />
        </div>
        <div className="mr-8 ml-8 w-96 border border-[#212121] rounded-full flex justify-between text-center overflow-hidden mt-1">
          <input
            type="search"
            id="site-search"
            className="search-input h-full pl-4 bg-[#121212] w-9/10"
            name="q"
            placeholder="Search"
          />
          <button
            type="submit"
            className="search-icon bg-[#212121] pr-4 w-1/10"
          >
            <FiSearch />
          </button>{" "}
        </div>
        <div className="mr-8 ml-8 mt-2">
          <User />
        </div>
      </div>
      <CategoryBar />
    </>
  );
}
