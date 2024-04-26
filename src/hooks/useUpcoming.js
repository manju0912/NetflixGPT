import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants"
import { addUpcomingMovies } from "../store/movieSlice";
import { useEffect } from "react";


const useUpcoming = () => {

    const dispatch = useDispatch();

    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

    const getUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&region=US', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
       !upcomingMovies && getUpcomingMovies();
    }, [])

}

export default useUpcoming;