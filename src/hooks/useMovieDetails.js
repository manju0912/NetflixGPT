import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../store/movieSlice";

const useMovieDetails = (id) => {
  
    const dispatch = useDispatch();

    const details = useSelector((store) => store.movies.movieDetails)

    const getMovieDetails = async () => {
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'?language=en-US', API_OPTIONS);
            const json = await data.json();

            dispatch(addMovieDetails(json));

        } catch (error) {
            console.error('Error fetching movie details', error);
        }
    }

    useEffect(() => {
        !details && getMovieDetails()
    }, []);

}

export default useMovieDetails