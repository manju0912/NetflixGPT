import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import nowPlayingMoviesReducer from './movieSlice';
import claudeSearchReducer from './claudeSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        movies: nowPlayingMoviesReducer,
        claudeSearch: claudeSearchReducer,
    }
});

export default store;