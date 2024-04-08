import { useSelector } from 'react-redux';
import useNowPlaying from "../../hooks/useNowPlaying"
import HeroContainer from "./HeroContainer";
import VideosContainer from "./VideosContainer";
import useTrendingMovies from '../../hooks/useTrendingMovies';
import usePopularMovies from '../../hooks/usePopularMovies';


const HomePage = () => {
  useNowPlaying();
  useTrendingMovies();
  usePopularMovies();

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const backgroundVideo = movies[5];
  console.log(backgroundVideo);

  const {original_title, overview, id} = backgroundVideo;

  return (
    <div>
      <HeroContainer title={original_title} overview={overview} movieId={id} />
      <VideosContainer />
    </div>
  )
}

export default HomePage