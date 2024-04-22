import {useSelector} from 'react-redux';
import VideoList from '../HomePage/VideoList';

const SearchResult = () => {

  const {movieName, searchResult} = useSelector((store) => store.genAiSearch);
  if (!movieName) return null;

  return (
    <div className='w-full'>
        <div>
          {
            movieName.map((movieName, index) => (
              <VideoList key={movieName} title={movieName} movies={searchResult[index]} />
            ))
          }
        </div>
    </div>
  )
}

export default SearchResult