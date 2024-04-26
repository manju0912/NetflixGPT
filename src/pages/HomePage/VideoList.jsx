import { useRef } from "react";
import VideoCard from "./VideoCard"
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";


const VideoList = ({title, movies}) => {

  const carouselContainer = useRef();

  const navigation = (direction) => {
    const container = carouselContainer.current;

    const scrollAmount = direction === "left" ? container.scrollLeft - (container.offsetWidth + 16) :
    container.scrollLeft + (container.offsetWidth + 16);

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <div className="w-[300px] lg:w-[1080px] sm:w-[600px] md:w-[720px] mx-auto my-0">
      <div className="mt-4">
        <h2 className="text-lg font-medium text-white/80 py-2">{title}</h2>
      </div>
      <div className="relative">
        <div className="absolute cursor-pointer w-full flex justify-between text-3xl top-[40%] translate-y-[-50%] opacity-70 hover:opacity-100 z-50">
          <IoArrowBackCircle className="-ml-5" onClick={() => navigation("left")} />
          <IoArrowForwardCircle className="-mr-5" onClick={() => navigation("right")} />
        </div>
        <div ref={carouselContainer} className="flex gap-x-4 cursor-pointer overflow-x-scroll scroll-smooth no-scrollbar">
          {
            movies?.map((movie, index) => (<VideoCard key={index} movieTitle={movie.title} releaseDate={movie.release_date} rating={movie.vote_average} posterPath={movie.poster_path} movie={{...movie}} />))
          }
        </div>
      </div>

    </div>
  )
}

export default VideoList