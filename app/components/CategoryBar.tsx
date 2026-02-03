"use client";
import { Suspense } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "../data/categories";

export default function CategoryBar({ disabled }: { disabled?: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "all";

  const onSelect = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    // Keep the existing search query if there is one
    router.push(`/?${params.toString()}`);
  };

  if (disabled) return null;

  return (
    <Suspense>
      <div className="sticky top-14 z-40 bg-black">
        <div className="flex gap-3 overflow-x-auto px-4 py-3 scrollbar-hide">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => onSelect(cat.value)}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm transition
                ${isActive ? "bg-white text-black" : "bg-neutral-800 text-white hover:bg-neutral-700"}
              `}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>
    </Suspense>
  );
}
