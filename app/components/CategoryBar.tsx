"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { categories } from "../data/categories";
type CategoryBarProps = {
  disabled?: boolean;
};
export default function CategoryBar({ disabled }: CategoryBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeCategory = searchParams.get("category") || "all";

  const onSelect = (value: string) => {
    router.push(`/?category=${value}`);
  };

  return (
    <div className="sticky top-14 z-40 bg-black">
      <div className="flex gap-3 overflow-x-auto px-4 py-3 scrollbar-hide">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.value;

          return (
            <button
              key={cat.value}
              onClick={() => onSelect(cat.value)}
              className={`whitespace-nowrap rounded-xl px-4 py-2 text-sm transition
                ${
                  isActive
                    ? "bg-white text-black"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }
              `}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
