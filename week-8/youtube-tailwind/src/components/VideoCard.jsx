import ytThumbnail from "../assets/yt-thumbnail.webp";
import channel_profile from "../assets/channel_profile.jpg";

const VideoCard = () => {
  return (
    <div className="flex items-center flex-col mb-5">
      <div className="h-[195px] relative">
        <img className="w-full h-full rounded-lg" src={ytThumbnail} />
        <span className="mr-2 absolute right-0 bottom-2 bg-black text-white rounded-md px-1">
          43:43
        </span>
      </div>
      <div className="flex flex-row mt-2 gap-3">
        <div className="flex justify-center mt-1">
          <img
            src={channel_profile}
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg text-bold">He said WHAT? 😳 @SoulAman</h3>
          <p>Ankkita C</p>
          <p>64,465 views 1 hour ago </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
