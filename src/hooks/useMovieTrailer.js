import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer = () => {
    const dispatch = useDispatch();

    const movieTrailer = async () => {
        const data = await fetch(`'https://api.themoviedb.org/3/movie/movie_id/videos', ${API_OPTIONS}`);
        const json = await data.json();
        console.log(json);
    }

    useEffect(() => {
        movieTrailer();
    }, [])
}

export default useMovieTrailer;