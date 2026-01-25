import { useState } from "react";
import Link from "next/link";

import { FaRegCircleUser } from "react-icons/fa6";

export default function User() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-slate-300 hover:text-white transition"
      >
        {isOpen ? <FaRegCircleUser size={28} /> : <FaRegCircleUser size={28} />}
      </button>
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4 text-slate-300 font-medium">
            <Link
              href="https://github.com/piyushbrl69"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 py-2"
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/piyushbrl"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 py-2"
            >
              LinkedIn
            </Link>
            <Link
              href="https://mailto:piyushbrl100@gmail.com"
              onClick={() => setIsOpen(false)}
              className="hover:text-emerald-400 py-2"
            >
              Email
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
