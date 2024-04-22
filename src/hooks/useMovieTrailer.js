import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from "../utils/constants"
import { addMovieTrailer } from "../store/movieSlice";

const useMovieTrailer = (id) => {
    const dispatch = useDispatch();

    const movieTrailer = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/'+id+'/videos', API_OPTIONS);
            const json = await data.json();

            const filteredVideo = json.results.filter((video) => video.type === "Trailer");
            const trailer = filteredVideo.length ? filteredVideo[0] : json.results[0];
            dispatch(addMovieTrailer(trailer));

        } catch(error) {
            console.error('Error fetching movie trailer', error);
        }
    }

    useEffect(() => {
       movieTrailer();
    }, [id, dispatch]);
}

export default useMovieTrailer;