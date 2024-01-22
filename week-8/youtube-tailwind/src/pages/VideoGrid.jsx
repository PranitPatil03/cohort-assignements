import VideoCard from "../components/VideoCard"

const VideoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-4 gap-2 m-5">
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
    </div>
  )
}

export default VideoGrid
