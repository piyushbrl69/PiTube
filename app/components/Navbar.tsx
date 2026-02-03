"use client";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBar from "./CategoryBar";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="px-4 flex items-center h-12 gap-8">
        <img src="/pitubee.png" alt="logo" className="h-10" />
        {/* ... existing search input code ... */}
        <input
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
          // ... rest of input
        />
      </div>
      <CategoryBar disabled={searchOpen} />
    </div>
  );
}
