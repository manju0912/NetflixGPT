import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import nowPlayingMoviesReducer from './movieSlice';
import genAiSearchReducer from './genAiSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: nowPlayingMoviesReducer,
        genAiSearch: genAiSearchReducer,
    }
});

export default store;