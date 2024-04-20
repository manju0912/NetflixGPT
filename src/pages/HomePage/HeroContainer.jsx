import {useSelector} from 'react-redux';
import { IoPlay } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import useMovieTrailer from "../../hooks/useMovieTrailer";

const HeroContainer = ({title, overview, movieId}) => {

  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  useMovieTrailer(movieId);
  

  return (
    <div className="w-full sm:h-[100vh] relative overflow-hidden">
      <div className="w-full h-full bg-gradient-to-t from-black/95 absolute -z-20 sm:z-0"></div>
      <iframe className="w-full aspect-video mt-0 lg:-mt-[6%] relative"
        title="YouTube Video"
        src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"}
        frameBorder="0"
        allowFullScreen
      />
      <div className="w-[300px] lg:w-[1080px] sm:w-[600px] md:w-[720px] py-4 sm:py-0 mx-auto sm:px-0 sm:absolute sm:top-[25%] sm:left-[10%]">
        <div className="lg:w-[40%] w-full sm:w-[70%]">
          <h1 className="md:text-[3rem] text-xl font-bold">{title}</h1>
          <p className="text-sm md:text-base py-4">{overview}</p>
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