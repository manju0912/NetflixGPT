import {createSlice} from '@reduxjs/toolkit'

const genAiSlice = createSlice({
    name: "genAiSearch",
    initialState: {
        showGenAiSearch: false,
        searchResult: null,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showGenAiSearch = !state.showGenAiSearch;
        },

        addSearchedMovieResult: (state, action) => {
            const {movieName,searchResult} = action.payload;
            state.searchResult = searchResult;
            state.movieName = movieName;
        }
    },
})

export const {toggleSearchView, addSearchedMovieResult} = genAiSlice.actions;
export default genAiSlice.reducer;