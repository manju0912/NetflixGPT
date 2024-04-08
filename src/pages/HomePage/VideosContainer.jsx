import VideoList from './VideoList'
import { useSelector } from 'react-redux'
const VideosContainer = () => {

  const movies = useSelector((store) => store.movies);

  return (
    <div className='w-full relative'>
      <div className="-mt-[12%] z-[99]">
        <VideoList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <VideoList title={"Trending"} movies={movies.trendingMovies} />
      </div>
    </div>
  )
}

export default VideosContainer