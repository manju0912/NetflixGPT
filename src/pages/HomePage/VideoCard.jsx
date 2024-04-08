import {IMG_CDN_URL} from '../../utils/constants';

const VideoCard = ({posterPath}) => {
  if(!posterPath) return;
  
  return (
    <div className="w-[150px] h-[200px] rounded-md shadow-lg shadow-slate-500 overflow-hidden">
      <div className="w-full h-full rounded-md">
        <img src={IMG_CDN_URL + posterPath} alt="poster" className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default VideoCard