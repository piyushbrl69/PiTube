// components/VideoCard.tsx
import { Card, categories } from "../data/categories";

interface VideoCardProps {
  video: Card;
}

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div
      className="flex flex-col rounded gap-3 border-2 border-[#0a0a0a] cursor-pointer group w-full transition-all duration-300 
             hover:bg-blue-600/20 
             hover:border-blue-600/0 
             hover:ring-10 hover:ring-blue-600/20 "
    >
      <div className="relative aspect-video rounded-xl overflow-hidden bg-zinc-100">
        <img
          src={video.img1}
          alt={video.title}
          className="object-cover w-full h-full  transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-medium px-1.5 py-0.5 rounded">
          {video.date}
        </div>
      </div>
      <div className="flex gap-3">
        <img
          src={video.img2}
          alt={video.category[0]}
          className="w-9 h-9 rounded-full bg-zinc-200 flex-shrink-0"
        />
        <div className="flex flex-col">
          <h3 className="text-[15px] font-semibold leading-snug text-white line-clamp-2 ">
            {video.title}
          </h3>
          <div className="text-[13px] text-zinc-600 mt-1">
            <p className="hover:text-white text-[#8c8c8c]">
              {video.category[0]}
            </p>
            <p>
              {video.views} • {video.postedAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
