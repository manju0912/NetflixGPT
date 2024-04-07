import { useSelector } from 'react-redux';
import { IoPlay } from "react-icons/io5";
import { GoInfo } from "react-icons/go";

const HeroContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const backgroundVideo = movies[0];
  console.log(backgroundVideo);

  const {original_title, overview, id} = backgroundVideo;

  return (
    <div className="w-full h-[640px] relative overflow-y-hidden">
      <div className="w-full h-full bg-gradient-to-t from-black absolute"></div>
      <iframe className="w-full aspect-video -mt-[5%]"
        title="YouTube Video"
        src="https://www.youtube.com/embed/0R3YS_k6a5E?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0"
        frameBorder="0"
        allowFullScreen
      />
      <div className="lg:w-[40%] sm:w-full md:w-[50%] px-8 md:px-0 absolute top-[40%] left-[180px]">
        <h1 className="text-[2.5vw] font-bold">{original_title}</h1>
        <p className="text-base">{overview}</p>
        <div className="mt-4 flex gap-x-4">
          <button className="flex items-center justify-center rounded-sm py-1 px-4 gap-1 bg-white text-black"><IoPlay /> Play</button>
          <button className="flex items-center justify-center rounded-sm py-1 px-4 gap-1 bg-gray-600/80"><GoInfo /> More Info.</button>
        </div>
      </div>
    </div>
  )
}

export default HeroContainer