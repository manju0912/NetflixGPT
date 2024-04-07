import {useSelector} from 'react-redux';
import { IoPlay } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const HeroContainer = ({title, overview, movieId}) => {

  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  useMovieTrailer(movieId);
  

  return (
    <div className="w-full h-[640px] relative overflow-y-hidden">
      <div className="w-full h-full bg-gradient-to-t from-black absolute"></div>
      <iframe className="w-full aspect-video -mt-[5%]"
        title="YouTube Video"
        src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"}
        frameBorder="0"
        allowFullScreen
      />
      <div className="lg:w-[1080px] sm:w-[600px] md:w-[720px] px-8 md:px-0 absolute top-[40%] left-[10%]">
        <div className="lg:w-[40%] sm:w-full md:w-[70%]">
          <h1 className="text-[3vw] font-bold">{title}</h1>
          <p className="text-base py-4">{overview}</p>
          <div className="my-6 flex gap-x-4">
            <button className="flex items-center justify-center rounded-sm py-1 px-4 gap-1 bg-white text-black"><IoPlay /> Play</button>
            <button className="flex items-center justify-center rounded-sm py-1 px-4 gap-1 bg-gray-600/80"><GoInfo /> More Info.</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContainer