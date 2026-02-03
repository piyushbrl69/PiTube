// page.tsx (Home)
import Navbar from "./components/Navbar";
import { VideoCard } from "./components/VideoCard";
import { projects } from "./data/categories";
import { Suspense } from "react";

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string; category?: string };
}) {
  // Grab current filter values from the URL
  const query = searchParams?.query || "";
  const activeCategoryValue = searchParams?.category || "all";

  // FILTER LOGIC:
  const filteredProjects = projects.filter((video) => {
    // 1. Check Category: Show all if 'all' is selected, else check if array includes category
    const matchesCategory =
      activeCategoryValue === "all" ||
      video.category.includes(activeCategoryValue.toLowerCase());

    // 2. Check Search Query (Title)
    const matchesQuery = video.title
      .toLowerCase()
      .includes(query.toLowerCase());

    return matchesCategory && matchesQuery;
  });

  return (
    <Suspense>
      <Navbar />
      <main className="p-5 md:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 max-w-[1800px] mx-auto">
          {filteredProjects.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-zinc-500 text-lg">
              No videos found matching your criteria.
            </p>
          </div>
        )}
      </main>
    </Suspense>
  );
}
