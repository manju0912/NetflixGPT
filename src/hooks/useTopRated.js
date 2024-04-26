import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addTopRatedMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useTopRated = () => {

    const dispatch = useDispatch();

    const topRated = useSelector((store) => store.movies.topRatedMovies);

    const getTopRated = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        !topRated && getTopRated();
    }, [])
}

export default useTopRated;