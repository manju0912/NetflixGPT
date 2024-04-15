import {createSlice} from '@reduxjs/toolkit'

const genAiSlice = createSlice({
    name: "genAiSearch",
    initialState: {
        showGenAiSearch: false,
    },
    reducers: {
        toggleSearchView: (state) => {
            state.showGenAiSearch = !state.showGenAiSearch;
        },
    },
})

export const {toggleSearchView} = genAiSlice.actions;
export default genAiSlice.reducer;