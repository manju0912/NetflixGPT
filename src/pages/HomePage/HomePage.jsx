import useNowPlaying from "../../hooks/useNowPlaying"
import HeroContainer from "./HeroContainer";
import VideoContainer from "./VideoContainer";


const HomePage = () => {
  useNowPlaying();

  return (
    <div>
      <HeroContainer />
      <VideoContainer />
    </div>
  )
}

export default HomePage