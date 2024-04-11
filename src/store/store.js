import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import nowPlayingMoviesReducer from './movieSlice';
import gptSearchReducer from './gptSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: nowPlayingMoviesReducer,
        gptSearch: gptSearchReducer,
    }
});

export default store;