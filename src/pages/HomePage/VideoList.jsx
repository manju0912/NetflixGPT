import VideoCard from "./VideoCard"

const VideoList = ({title, movies}) => {

  return (
    <div className="lg:w-[1080px] w-[600px] md:w-[720px] px-8 md:px-0 mx-auto my-0">
      <div className="mt-4">
        <h2 className="text-lg font-medium text-white/80 py-2">{title}</h2>
      </div>
      <div className="flex cursor-pointer overflow-x-scroll no-scrollbar">
        <div className="flex gap-x-4">
        {
          movies?.map((movie) => (<VideoCard key={movie.id} posterPath={movie.poster_path} />))
        }
        </div>
      </div>

    </div>
  )
}

export default VideoList