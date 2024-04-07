import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import nowPlayingMoviesReducer from './movieSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: nowPlayingMoviesReducer,
    }
});

export default store;