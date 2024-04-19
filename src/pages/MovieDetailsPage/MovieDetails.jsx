import { IMG_CDN_URL } from '../../utils/constants';
import {useSelector} from 'react-redux';


const MovieDetails = () => {
  
  const details = useSelector((store) => store.movies?.movieDetails);

  if(!details){
    return null;
  }

  console.log(details)
  const {title, release_date, genres, overview, poster_path, production_companies, production_countries, spoken_languages, runtime, vote_average, status} = details;

  console.log('details', details)

  return (
    <div className='w-full py-10'>
      <div className='py-10 flex justify-between gap-4 border-y border-gray-500 mx-[12%]'>
        <div className="w-1/3">
          <img src={IMG_CDN_URL + poster_path} alt="Movie Poster" className='w-[80%] rounded h-auto object-cover' />
        </div>
        <div className="w-2/3">
          <div className='flex items-center gap-8 border-b border-gray-500'>
            <h2 className='text-gray-200 font-medium text-3xl tracking-wide py-2'>{title}</h2>
            <div className="border border-gray-400 rounded py-1 px-2 text-xs text-gray-200 font-medium tracking-wide">IMDb <span>{(vote_average).toFixed(1)}</span></div>
          </div>
          <div className='border-b border-gray-500 p-4 flex items-center gap-5 text-gray-300'>
            <span>{Math.floor(runtime / 60)}h {runtime % 60}min</span>
            <ul className="flex gap-2 border-l border-gray-400 pl-4">
              {
                genres.map((genre, index) => <li key={index} className='border border-gray-400 rounded-full py-1 px-3 text-xs'>{genre.name}</li>)
              }
            </ul>
          </div>
          <div className="pt-4">
            <h3 className='text-xl tracking-wide text-gray-200'>Details</h3>
            <ul className='py-4'>
              <li><span className='text-gray-300 font-medium'>Country:</span>
              {
                production_countries.map((country, index) => (<span key={index} className='text-gray-400 ml-2'>{country.name}</span>))
              }
              </li>
              <li><span className='text-gray-300 font-medium'>Language:</span>
              {spoken_languages.map((lang, index) => (<span key={index} className='text-gray-400 ml-2'>{lang.name}</span>))}
              </li>
              <li><span className='text-gray-300 font-medium'>Production:</span>
              {
                production_companies.map((company, index) => (<span key={index} className='text-gray-400 ml-2'>{company.name},</span>))
              }
              </li>
              <li><span className='text-gray-300 font-medium'>Status:</span><span className='text-gray-400 ml-2'>{status}</span></li>
              <li><span className='text-gray-300 font-medium'>Release Date:</span><span className='text-gray-400 ml-2'>{release_date}</span></li>
            </ul>
            <p className="text-xl text-gray-200 tracking-wide py-4 border-b border-gray-500">Overview</p>
            <p className='py-2 text-gray-300'>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails