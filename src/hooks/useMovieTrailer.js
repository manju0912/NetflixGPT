import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from "../utils/constants"
import { addMovieTrailer } from "../store/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector((store) => store.movies?.movieTrailer);

    const movieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos', API_OPTIONS);
        const json = await data.json();

        const filteredVideo = json.results.filter((video) => video.type === "Trailer");
        const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
       !trailerVideo && movieTrailer();
    }, [])
}

export default useMovieTrailer;