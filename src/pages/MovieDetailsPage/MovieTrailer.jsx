import {useSelector} from 'react-redux';

const MovieTrailer = () => {

  const movieTrailer = useSelector((store) => store.movies.movieTrailer);

  return (
    <div className='w-full mx-auto relative'>
        <iframe className="w-full aspect-video mt-12 sm:-mt-[10%]"
          title="YouTube Video"
          src={"https://www.youtube.com/embed/"+movieTrailer?.key+"?autoplay=1&loop=1&mute=0&controls=0&modestbranding=1&showinfo=0&rel=0"}
          frameBorder="0"
          allowFullScreen
        />
    </div>
  )
}

export default MovieTrailer