import {useSelector} from 'react-redux';
import MovieDetails from "./MovieDetails"
import MovieTrailer from "./MovieTrailer";
import SearchPage from '../SearchPage/SearchPage';
import { useParams } from 'react-router-dom';
import useMovieTrailer from "../../hooks/useMovieTrailer";
import useMovieDetails from '../../hooks/useMovieDetails';


const WatchPage = () => {

  const {id} = useParams();

  useMovieDetails(id);
  useMovieTrailer(id);

  const showSearchPage = useSelector((store) => store.genAiSearch.showGenAiSearch);

  const details = useSelector((store) => store.movies?.movieDetails);
  const movieTrailer = useSelector((store) => store.movies?.movieTrailer);

  return (
    <section className='w-full'>
        {
          showSearchPage ? (<SearchPage />) :
          (
            <>
            {
              details && movieTrailer && (
                <>
                  <MovieTrailer />
                  <MovieDetails />
                </>
              )
            }
            </>
          )
        }
    </section>
  )
}

export default WatchPage