import {Link} from 'react-router-dom';
import {IMG_CDN_URL} from '../../utils/constants';
import { IoStar } from "react-icons/io5";


const VideoCard = ({movieTitle, releaseDate, rating, posterPath, movie}) => {
  if(!posterPath) return;
  
  return (
    <Link to={`/movie/${movie?.id}`}>
      <div className="w-[160px] h-[280px] md:w-[180px] md:h-[320px] rounded-md overflow-hidden">
        <div className="w-full h-[70%] rounded-md">
          <img src={IMG_CDN_URL + posterPath} alt="poster" className="w-full h-full aspect-auto" />
        </div>
        <div className='flex justify-between gap-4 px-1 py-2 text-sm'>
          <div className="">
            <h5>{movieTitle}</h5>
            <p className='text-sm font-normal text-gray-400 flex justify-between'>{releaseDate}</p>
          </div>
          <div className='border border-gray-500 rounded-full w-max h-max p-1 text-gray-300'>
            <p className='flex flex-col items-center justify-center text-xs'><span><IoStar className='w-3 h-3' /></span>{(rating).toFixed(1)}</p>
          </div>
          
        </div>
      </div>
    </Link>
    
  )
}

export default VideoCard