import {IMG_CDN_URL} from '../../utils/constants';

const VideoCard = ({movieTitle, releaseDate, rating, posterPath}) => {
  if(!posterPath) return;
  
  return (
    <div className="w-[160px] h-[280px] rounded-md overflow-hidden">
      <div className="w-full h-3/4 rounded-md">
        <img src={IMG_CDN_URL + posterPath} alt="poster" className="w-full h-full object-cover" />
      </div>
      <div className='px-1 py-2'>
        <h5 className='truncate'>{movieTitle}</h5>
        <p className='text-sm font-light text-gray-500 flex justify-between'><span>{releaseDate}</span> <span>{rating}</span></p>
      </div>
    </div>
  )
}

export default VideoCard