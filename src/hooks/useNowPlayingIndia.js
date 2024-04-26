import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingIndia } from "../store/movieSlice";
import { useEffect } from "react";

const useNowPlayingIndia = () => {

    const dispatch = useDispatch();

    const nowPlayingIndia = useSelector((store) => store.movies.nowPlayingIndia);

    const getNowPlayingIndia = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_date.gte=2022-05-05&region=IN&sort_by=popularity.desc&vote_average.gte=6.5&with_origin_country=IN', API_OPTIONS);
        const json = await data.json()
        dispatch(addNowPlayingIndia(json.results));
    }

    useEffect(() => {
        !nowPlayingIndia && getNowPlayingIndia();
    }, [])
}

export default useNowPlayingIndia;