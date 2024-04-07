import useNowPlaying from "../../hooks/useNowPlaying"
import HeroContainer from "./HeroContainer";
import VideosContainer from "./VideosContainer";


const HomePage = () => {
  useNowPlaying();

  return (
    <div>
      <HeroContainer />
      <VideosContainer />
    </div>
  )
}

export default HomePage