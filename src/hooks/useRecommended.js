import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addRecommendedMovies } from "../store/movieSlice";
import { useEffect } from "react";

const useRecommended = () => {

    const dispatch = useDispatch();

    const recommendations = useSelector((store) => store.movies.recommendations)

    const getRecommendations = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/1163258/recommendations?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addRecommendedMovies(json.results));
    }

    useEffect(() => {
        !recommendations && getRecommendations();
    }, [])

}

export default useRecommended;