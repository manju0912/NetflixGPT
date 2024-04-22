import VideoCard from "./VideoCard"

const VideoList = ({title, movies}) => {

  return (
    <div className="w-[300px] lg:w-[1080px] sm:w-[600px] md:w-[720px] mx-auto my-0">
      <div className="mt-4">
        <h2 className="text-lg font-medium text-white/80 py-2">{title}</h2>
      </div>
      <div className="relative flex cursor-pointer overflow-x-scroll scroll-smooth no-scrollbar">
        <div className="flex gap-x-4">
        {
          movies?.map((movie, index) => (<VideoCard key={index} movieTitle={movie.title} releaseDate={movie.release_date} rating={movie.vote_average} posterPath={movie.poster_path} movie={{...movie}} />))
        }
        </div>
      </div>

    </div>
  )
}

export default VideoList