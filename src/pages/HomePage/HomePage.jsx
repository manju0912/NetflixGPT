import { useSelector } from 'react-redux';
import useNowPlaying from "../../hooks/useNowPlaying"
import HeroContainer from "./HeroContainer";
import VideosContainer from "./VideosContainer";
import useTrendingMovies from '../../hooks/useTrendingMovies';
import usePopularMovies from '../../hooks/usePopularMovies';
import SearchPage from '../SearchPage/SearchPage';
import useTopRated from '../../hooks/useTopRated';
import useUpcoming from '../../hooks/useUpcoming';
import useRecommended from '../../hooks/useRecommended';
import useNowPlayingIndia from '../../hooks/useNowPlayingIndia';


const HomePage = () => {
  useNowPlaying();
  useTrendingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  useRecommended();
  useNowPlayingIndia();

  const showSearchPage = useSelector((store) => store.genAiSearch.showGenAiSearch);

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if(!movies) return;

  const backgroundVideo = movies[0];

  const {original_title, overview, id} = backgroundVideo;

  return (
    <div className='w-screen overflow-hidden'>
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