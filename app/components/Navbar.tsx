"use client";

import Image from "next/image";
import CategoryBar from "./CategoryBar";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between bg-black">
        <div className=" mr-8 ml-8">
          <img src="/pitubee.png" alt="logo" className="h-[40px]" />
        </div>
        <div className="mr-8 ml-8 border-gray-500 rounded-full">
          <input type="search" id="site-search" name="q" placeholder="Search" />
          <button type="submit">🔍</button>
        </div>
        <div className="mr-8 ml-8">
          <button>hh</button>
        </div>
      </div>
      <CategoryBar />
    </>
  );
}
