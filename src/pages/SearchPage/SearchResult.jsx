import {useSelector} from 'react-redux';
import VideoList from '../HomePage/VideoList';
import VideoCard from '../HomePage/VideoCard';

const SearchResult = () => {

  const {movieName, searchResult} = useSelector((store) => store.genAiSearch);
  if (!movieName) return null;

  return (
    <div className='w-full'>
        <div className='mb-[7%] flex flex-wrap justify-between items-center gap-12 px-20'>
          {
            movieName.map((movieName, index) => (
              <div key={index} className="flex cursor-pointer overflow-x-auto no-scrollbar">
                <div className="flex gap-x-4">
                {
                  searchResult[index]?.map((movie, index) => (<VideoCard key={index} movieTitle={movie.title} releaseDate={movie.release_date} rating={movie.vote_average} posterPath={movie.poster_path} movie={{...movie}} />))
                }
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default SearchResult