import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        trendingMovies: null,
    },
    reducers: {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },

        addMovieTrailer : (state, action) => {
            state.movieTrailer = action.payload;
        },

        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addTrendingMovies} = movieSlice.actions;
export default movieSlice.reducer;