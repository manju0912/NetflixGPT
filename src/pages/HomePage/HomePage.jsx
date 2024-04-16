import { useSelector } from 'react-redux';
import useNowPlaying from "../../hooks/useNowPlaying"
import HeroContainer from "./HeroContainer";
import VideosContainer from "./VideosContainer";
import useTrendingMovies from '../../hooks/useTrendingMovies';
import usePopularMovies from '../../hooks/usePopularMovies';
import SearchPage from '../SearchPage/SearchPage';


const HomePage = () => {
  useNowPlaying();
  useTrendingMovies();
  usePopularMovies();

  const showSearchPage = useSelector((store) => store.genAiSearch.showGenAiSearch);

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const backgroundVideo = movies[0];

  const {original_title, overview, id} = backgroundVideo;

  return (
    <div>
      {
        showSearchPage ? <SearchPage /> :
        <>
          <HeroContainer title={original_title} overview={overview} movieId={id} />
          <VideosContainer />
        </>
      }
    </div>
  )
}

export default HomePage