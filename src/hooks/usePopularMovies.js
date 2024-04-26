import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../store/movieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();

    const popularMovies = useSelector((store) => store.movies.popularMovies)

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=2023&region=IN&sort_by=popularity.desc&with_origin_country=IN', API_OPTIONS);
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(() => {
       !popularMovies && getPopularMovies();
    }, [])
}

export default usePopularMovies;