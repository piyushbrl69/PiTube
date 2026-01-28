import CategoryBar from "./components/CategoryBar";
import Navbar from "./components/Navbar";
import { VideoCard } from "./components/VideoCard";
import { projects } from "./data/categories";

export default function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  return (
    <>
      <Navbar />
      {/* FeedGrid comes later */}
      <main className="p-5 md:p-10">
        {/* YouTube Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 max-w-[1800px] mx-auto">
          {projects.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </main>
    </>
  );
}
