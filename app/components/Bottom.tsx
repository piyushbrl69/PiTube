"use client";
import { AiFillHome } from "react-icons/ai";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";

import { useState } from "react";
import User from "./User";

export default function Bottom() {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center">
        <button className="flex flex-col items-center justify-center text-white">
          <AiFillHome size={24} />
          <span className="text-sm mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white">
          <SiYoutubeshorts size={24} />
          <span className="text-sm mt-1">Projects</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white">
          <MdSubscriptions size={24} />
          <span className="text-sm mt-1">SKills</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white">
          <User />
          <span className="text-sm mt-1">You</span>
        </button>
      </div>
    </>
  );
}
