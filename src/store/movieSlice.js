import {createSlice} from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        movieTrailer: null,
        trendingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        recommendations: null,
        nowPlayingIndia: null,
        movieDetails: null,
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
        },

        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },

        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },

        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },

        addRecommendedMovies : (state, action) => {
            state.recommendations = action.payload;
        },

        addNowPlayingIndia: (state, action) => {
            state.nowPlayingIndia = action.payload;
        },

        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer, addTrendingMovies, addPopularMovies, addUpcomingMovies, addRecommendedMovies, addTopRatedMovies, addNowPlayingIndia, addMovieDetails} = movieSlice.actions;
export default movieSlice.reducer;