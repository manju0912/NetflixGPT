import VideoList from './VideoList'
import { useSelector } from 'react-redux'
const VideosContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='w-full relative mb-24'>
      <div className="-mt-[12%] z-[99]">
        <VideoList title={"New Launched"} movies={movies.nowPlayingMovies} />
        <VideoList title={"Trending"} movies={movies.trendingMovies} />
        <VideoList title={"Popular Movies"} movies={movies.popularMovies} />
      </div>
    </div>
  )
}

export default VideosContainer